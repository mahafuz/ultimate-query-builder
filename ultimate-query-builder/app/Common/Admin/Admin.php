<?php

namespace UQB\Plugin\Common\Admin;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Admin {

	public function __construct() {
		$this->init();
	}

	public function init() {
		if ( is_admin() ) {
			add_action( 'admin_enqueue_scripts', [ $this, 'addPluginScripts' ] );
		}
	}

	public function addPluginScripts() {

		uqb()->helpers->enqueueScript( 'uqb-plugins', 'uqb-plugin.js' );

		wp_localize_script(
			'uqb-plugins',
			'uqbPlugins',
			[
				'publicPostTypes' => uqb()->helpers->getPublicPostTypes( true ),
				'taxonomies'      => uqb()->helpers->getPublicTaxonomies( false ),
				'terms'           => uqb()->helpers->getTerms()
			]
		);
	}
}