<?php
namespace UQB\Plugin\Common\Utils;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Extendable Block class helper
 *
 * @since 1.0.0
 */
class Blocks {
	/**
	 * Class constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'init' ] );
		add_filter( 'block_categories', [ $this, 'blockCategories' ], 10 );
	}

	/**
	 * Initializes our blocks.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function init() {
		if ( ! $this->isBlockEditorActive() ) {
			return;
		}

		$this->assets();
		$this->register();
	}

	/**
	 * Registers the block. This is a wrapper to be extended in the child class.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function register() {}

	/**
	 * Adds a new UQB block category.
	 *
	 * @since 1.0.0
	 *
	 * @param  array $categories Array of block categories.
	 * @return void
	 */
	public function blockCategories( $categories ) {
		$exists = wp_list_filter( $categories, [ 'slug' => 'uqb' ] );
		if ( ! empty( $exists ) ) {
			return $categories;
		}

		return array_merge(
			$categories,
			[
				[
					'slug'  => 'uqb',
					'title' => UQB_PLUGIN_SHORT_NAME,
				]
			]
		);
	}

	/**
	 * Helper function to determine if we're rendering the block inside Gutenberg.
	 *
	 * @since 1.0.0
	 *
	 * @return bool In gutenberg.
	 */
	public function isGBEditor() {
		return \defined( 'REST_REQUEST' ) && REST_REQUEST && ! empty( $_REQUEST['context'] ) && 'edit' === $_REQUEST['context']; // phpcs:ignore HM.Security.NonceVerification.Recommended
	}

	/**
	 * Helper function to determine if we can register blocks.
	 *
	 * @since 1.0.0
	 *
	 * @return bool Can register block.
	 */
	public function isBlockEditorActive() {
		return function_exists( 'register_block_type' );
	}
}