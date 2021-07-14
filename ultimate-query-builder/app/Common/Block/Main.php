<?php
namespace UQB\Plugin\Common\Block;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main Block.
 *
 * @since 1.0.0
 */
class Main extends \UQB\Plugin\Common\Utils\Blocks {
	/**
	 * Class constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Registers the block.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function register() {
		register_block_type(
			'uqb/query-builder',
			[
				'editor_script'   => 'create-block-uqb-block-editor',
				'attributes'      => [
					'postType'     => [
						'type' => 'array'
					],
					'taxonomy'     => [
						'type' => 'array'
					],
					'terms'        => [
						'type' => 'array'
					],
					'customFields' => [
						'type' => 'array'
					]
				],
				'render_callback' => [ $this, 'render' ]
			]
		);
	}

	public function assets() {
		uqb()->helpers->enqueueScript( 'create-block-uqb-block-editor', 'index.js', false );
		uqb()->helpers->enqueueStyle( 'create-block-uqb-block-editor', 'index.css', true );
		uqb()->helpers->enqueueStyle( 'create-block-uqb-block', 'style-index.css', true );
	}

	/**
	 * Renders the block.
	 *
	 * @since 1.0.0
	 *
	 * @param  array  $blockAttributes The block attributes.
	 * @return string                  The output from the output buffering.
	 */
	public function render( $blockAttributes ) {
		$postType     = ! empty( $blockAttributes['postType'] ) ? reset( $blockAttributes['postType'] ) : false;
		$taxonomy     = ! empty( $blockAttributes['taxonomy'] ) ? reset( $blockAttributes['taxonomy'] ) : false;
		$terms        = ! empty( $blockAttributes['terms'] ) ? reset( $blockAttributes['terms'] ) : false;
		$customFields = ! empty( $blockAttributes['customFields'] ) ? $blockAttributes['customFields'] : false;
		$additionalArgs = [
			'taxonomy'     => $taxonomy,
			'terms'        => $terms,
			'customFields' => $customFields
		];

		$posts = uqb()->query->posts( $postType['value'], $additionalArgs );

		echo '<pre>', print_r( $posts ), '</pre>';

		return '<h1>Hello World</h1>';
	}
}