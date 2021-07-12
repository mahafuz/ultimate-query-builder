<?php
namespace UQB\Plugin\Common\Utils;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Helpers {
	/**
	 * Helper method to enqueue scripts.
	 *
	 * @since 1.0.0
	 *
	 * @param  string $script The script to enqueue.
	 * @param  string $url    The URL of the script.
	 * @param  bool   $vue    Whether or not this is a vue script.
	 * @return void
	 */
	public function enqueueScript( $script, $url, $enqueue = true ) {
		$dir       = UQB_DIR;
		$assetPath = "$dir/build/index.asset.php";

		if ( ! file_exists( $assetPath ) ) {
			throw new \Error(
				'You need to run `npm start` or `npm run build` for the "create-block/uqb" block first.'
			);
		}

		if ( ! wp_script_is( $script, 'enqueued' ) ) {
			$assets = require( $assetPath );

			if ( $enqueue ) {
				wp_enqueue_script(
					$script,
					$this->getScriptUrl( $url ),
					$assets['dependencies'],
					uqb()->version,
					true
				);
			} else {
				wp_register_script(
					$script,
					$this->getScriptUrl( $url ),
					$assets['dependencies'],
					uqb()->version,
					true
				);
			}
		}
	}

	/**
	 * Helper method to enqueue stylesheets.
	 *
	 * @since 1.0.0
	 *
	 * @param  string $style The stylesheet to enqueue.
	 * @param  string $url   The URL of the stylesheet.
	 * @param  bool   $vue    Whether or not this is a vue stylesheet.
	 * @return void
	 */
	public function enqueueStyle( $style, $url, $enqueue = true ) {
		if ( ! wp_style_is( $style, 'enqueued' ) ) {
			if ( $enqueue ) {
				wp_enqueue_style(
					$style,
					$this->getScriptUrl( $url ),
					[],
					uqb()->version
				);
			} else {
				wp_register_style(
					$style,
					$this->getScriptUrl( $url ),
					[],
					uqb()->version
				);
			}
		}
	}

	/**
	 * Retrieve the proper URL for this script or style.
	 *
	 * @since 1.0.0
	 *
	 * @param  string $url The url.
	 * @return string      The modified url.
	 */
	public function getScriptUrl( $url ) {
		return plugins_url( 'build/' . $url, UQB_FILE );
	}

	/**
	 * Retrieve a list of public post types with slugs/icons.
	 *
	 * @since 1.0.0
	 *
	 * @param  boolean $namesOnly       Whether only the names should be returned.
	 * @param  boolean $hasArchivesOnly Whether or not to only include post types which have archives.
	 * @param  boolean $rewriteType     Whether or not to rewrite the type slugs.
	 * @return array                    An array of public post types.
	 */
	public function getPublicPostTypes( $namesOnly = false, $rewriteType = false ) {
		$postTypes   = [];
		$postObjects = get_post_types( [ 'public' => true ], 'objects' );
		$woocommerce = class_exists( 'woocommerce' );
		foreach ( $postObjects as $postObject ) {
			if ( empty( $postObject->label ) ) {
				continue;
			}

			if ( $namesOnly ) {
				$postTypes[] = [
					'value' => $postObject->name,
					'label' => $postObject->label
				];
				continue;
			}

			if ( 'attachment' === $postObject->name ) {
				$postObject->label = __( 'Attachments', 'all-in-one-seo-pack' );
			}

			if ( 'product' === $postObject->name && $woocommerce ) {
				$postObject->menu_icon = 'dashicons-products';
			}

			$name = $postObject->name;

			$postTypes[] = [
				'name'         => $name,
				'label'        => ucwords( $postObject->label ),
				'singular'     => ucwords( $postObject->labels->singular_name ),
				'icon'         => $postObject->menu_icon,
				'hasExcerpt'   => post_type_supports( $postObject->name, 'excerpt' ),
				'hasArchive'   => $postObject->has_archive,
				'hierarchical' => $postObject->hierarchical,
				'taxonomies'   => get_object_taxonomies( $name ),
				'slug'         => isset( $postObject->rewrite['slug'] ) ? $postObject->rewrite['slug'] : $name
			];
		}

		return $postTypes;
	}

	/**
	 * Retrieve a list of public taxonomies with slugs/icons.
	 *
	 * @since 1.0.0
	 *
	 * @param  boolean $namesOnly   Whether only the names should be returned.
	 * @param  boolean $rewriteType Whether or not to rewrite the type slugs.
	 * @return array                An array of public taxonomies.
	 */
	public function getPublicTaxonomies( $namesOnly = false, $rewriteType = false ) {
		$taxonomies = [];
		if ( count( $taxonomies ) ) {
			return $taxonomies;
		}

		$taxObjects = get_taxonomies( [ 'public' => true ], 'objects' );
		foreach ( $taxObjects as $taxObject ) {
			if ( empty( $taxObject->label ) ) {
				continue;
			}

			if ( in_array( $taxObject->name, [
				'product_shipping_class',
				'post_format'
			], true ) ) {
				continue;
			}

			// We need to exclude product attributes from this list as well.
			if (
				'pa_' === substr( $taxObject->name, 0, 3 ) &&
				'manage_product_terms' === $taxObject->cap->manage_terms
			) {
				continue;
			}

			if ( $namesOnly ) {
				$taxonomies[] = [
					'value' => $taxObject->name,
					'label' => $taxObject->label
				];
				continue;
			}

			$name = $taxObject->name;

			$taxonomies[] = [
				'name'         => $name,
				'label'        => ucwords( $taxObject->label ),
				'singular'     => ucwords( $taxObject->labels->singular_name ),
				'icon'         => strpos( $taxObject->label, 'categor' ) !== false ? 'dashicons-category' : 'dashicons-tag',
				'hierarchical' => $taxObject->hierarchical,
				'slug'         => isset( $taxObject->rewrite['slug'] ) ? $taxObject->rewrite['slug'] : ''
			];
		}

		return $taxonomies;
	}

	public function getTerms() {
		$terms = [];
		$publicTaxonomies = uqb()->helpers->getPublicTaxonomies( true );

		foreach ( $publicTaxonomies as $taxonomy ) {
			$collection = uqb()->query->terms( $taxonomy['value'] );
			if ( $collection ) {
				$terms[ $taxonomy['value'] ] = $collection;
			}
		}
		return $terms;
	}
}