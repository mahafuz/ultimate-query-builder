<?php
namespace UQB\Plugin\Common\Block;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Handles all complex queries for the sitemap.
 *
 * @since 4.0.0
 */
class Query {
	/**
	 * Returns all eligble sitemap entries for a given post type.
	 *
	 * @since 4.0.0
	 *
	 * @param  mixed $postTypes      The post type(s). Either a singular string or an array of strings.
	 * @param  array $additionalArgs Any additional arguments for the post query.
	 * @return array                 The post objects.
	 */
	public function posts( $postType, $additionalArgs = [] ) {

		if ( empty( $postType ) ) {
			return [];
		}

		// Set defaults.
		$fields  = '`ID`, `post_title`, `post_excerpt` ';
		$fields .= '`post_parent`, `post_date_gmt`, `post_modified_gmt`, `post_type` ';
		$maxAge  = '';
		$orderBy = '`ID` ASC';

		// Override defaults if passed as additional arg.
		// foreach ( $additionalArgs as $name => $value ) {
		// 	// Attachments need to be fetched with all their fields because we need to get their post parent further down the line.
		// 	$$name = esc_sql( $value );
		// 	if ( 'root' === $name && $value && 'attachment' !== $postType ) {
		// 		$fields = '`p`.`ID`, `p`.`post_type`';
		// 	}
		// }

		$query = uqb()->db
			->start( 'posts' )
			->select( $fields )
			->where( 'post_status', 'attachment' === $postType ? 'inherit' : 'publish' )
			->where( 'post_type', $postType );

		// Exclude posts assigned to excluded terms.
		// TODO : implement included terms.
		// TODO: hide taxonomy and terms if post type page
		// $excludedTerms = uqb()->sitemap->helpers->excludedTerms();
		// if ( $excludedTerms ) {
		// 	$termRelationshipsTable = uqb()->db->db->prefix . 'term_relationships';
		// 	$query->whereRaw("
		// 		( `p`.`ID` NOT IN
		// 			(
		// 				SELECT `tr`.`object_id`
		// 				FROM `$termRelationshipsTable` as tr
		// 				WHERE `tr`.`term_taxonomy_id` IN ( $excludedTerms )
		// 			)
		// 		)" );
		// }

		if ( $maxAge ) {
			$query->whereRaw( "( `p`.`post_date_gmt` >= '$maxAge' )" );
		}

		echo $query;

		$posts = $query->orderBy( $orderBy )->run()->result();

		// Convert ID from string to int.
		foreach ( $posts as $post ) {
			$post->ID = intval( $post->ID );
		}

		return $this->filterPosts( $posts );
	}

	/**
	 * Filters the queried posts.
	 *
	 * @since 4.0.0
	 *
	 * @param  array $posts          The posts.
	 * @return array $remainingPosts The remaining posts.
	 */
	public function filterPosts( $posts ) {
		$remainingPosts          = [];
		$isWooCommerceActive     = uqb()->helpers->isWooCommerceActive();

		foreach ( $posts as $post ) {
			if ( 'product' !== $post->post_type && is_numeric( $post ) ) {
				$remainingPosts[] = $post;
				continue;
			}

			switch ( $post->post_type ) {
				case 'page':
						$remainingPosts[] = $post;
					break;
				case 'product':
					if ( ! $this->isHiddenProduct( $post ) ) {
						$remainingPosts[] = $post;
					}
					break;
				case 'attachment':
					if ( ! $this->isInvalidAttachment( $post ) ) {
						$remainingPosts[] = $post;
					}
					break;
				default:
					$remainingPosts[] = $post;
					break;
			}
		}

		return $remainingPosts;
	}

	/**
	 * Whether the WooCommerce product is hidden.
	 *
	 * @since 4.0.0
	 *
	 * @param  Object  $post The post.
	 * @return boolean       Whether the post is a hidden product.
	 */
	private function isHiddenProduct( $post ) {
		static $hiddenProductIds = null;
		if ( null === $hiddenProductIds ) {
			$hiddenProducts = uqb()->db->start( 'term_relationships as tr' )
				->select( 'tr.object_id' )
				->join( 'term_taxonomy as tt', 'tr.term_taxonomy_id = tt.term_taxonomy_id' )
				->join( 'terms as t', 'tt.term_id = t.term_id' )
				->where( 't.name', 'exclude-from-catalog' )
				->run()
				->result();

			$hiddenProductIds = [];
			if ( ! empty( $hiddenProducts ) ) {
				foreach ( $hiddenProducts as $hiddenProduct ) {
					$hiddenProductIds[] = (int) $hiddenProduct->object_id;
				}
			}
		}

		$postId = $post;
		if ( ! is_numeric( $post ) ) {
			$postId = $post->ID;
		}

		return in_array( $postId, $hiddenProductIds, true );
	}

	/**
	 * Excludes attachments if their post parent isn't published or parent post type isn't registered anymore.
	 *
	 * @since 4.0.0
	 *
	 * @param  Object  $post The post.
	 * @return boolean       Whether the attachment is invalid.
	 */
	private function isInvalidAttachment( $post ) {
		if ( empty( $post->post_parent ) ) {
			return false;
		}

		$parent = get_post( $post->post_parent );
		if ( ! is_object( $parent ) ) {
			return false;
		}

		if (
			'publish' !== $parent->post_status ||
			! in_array( $parent->post_type, get_post_types(), true ) ||
			$parent->post_password
		) {
			return true;
		}
		return false;
	}

	/**
	 * Returns all eligble sitemap entries for a given taxonomy.
	 *
	 * @since 4.0.0
	 *
	 * @param  string $taxonomy       The taxonomy.
	 * @param  array  $additionalArgs Any additional arguments for the term query.
	 * @return array                  The term objects.
	 */
	public function terms( $taxonomy, $additionalArgs = [] ) {
		// Set defaults.
		$fields = 't.term_id, t.name';
		$offset  = 0;

		// Override defaults if passed as additional arg.
		foreach ( $additionalArgs as $name => $value ) {
			$$name = esc_sql( $value );
			if ( 'root' === $name ) {
				$fields = 't.term_id';
			}
		}

		$termRelationshipsTable = uqb()->db->db->prefix . 'term_relationships';
		$termTaxonomyTable      = uqb()->db->db->prefix . 'term_taxonomy';
		$query = uqb()->db
			->start( uqb()->db->db->terms . ' as t', true )
			->select( $fields )
			->whereRaw( "
			( `t`.`term_id` IN
				(
					SELECT `tt`.`term_id`
					FROM `$termTaxonomyTable` as tt
					WHERE `tt`.`taxonomy` = '$taxonomy'
					AND `tt`.`count` > 0
				)
			)" );

		// $excludedTerms = uqb()->sitemap->helpers->excludedTerms();
		// if ( $excludedTerms ) {
		// 	$query->whereRaw("
		// 		( `t`.`term_id` NOT IN
		// 			(
		// 				SELECT `tr`.`term_taxonomy_id`
		// 				FROM `$termRelationshipsTable` as tr
		// 				WHERE `tr`.`term_taxonomy_id` IN ( $excludedTerms )
		// 			)
		// 		)" );
		// }

		$terms = $query->orderBy( '`t`.`term_id` ASC' )
			->run()
			->result();

        $output = [];
		foreach ( $terms as $term ) {
            $result = new \stdClass;
			$result->value = intval( $term->term_id );
            $result->label = $term->name;
            $output[] = $result;
		}
		return $output;
	}


	/**
	 * Wipes all data and forces the plugin to rescan the site for images.
	 *
	 * @since 4.0.13
	 *
	 * @return void
	 */
	public function resetImages() {
		uqb()->db
			->update( 'uqb_posts' )
			->set(
				[
					'images'          => null,
					'image_scan_date' => null
				]
			)
			->run();
	}
}