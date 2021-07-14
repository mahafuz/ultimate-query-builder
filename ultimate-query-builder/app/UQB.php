<?php

namespace UQB\Plugin {

	// global $wpdb;

	// $my_option_name = '_wp_page_template';
	// $query = $wpdb->prepare( "SELECT * FROM $wpdb->postmeta WHERE meta_key = %s", $my_option_name );
	// $results = $wpdb->get_results( $query );

	// // error_log( print_r( $results, 1 ) );

	// return;

	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	final class UQB {

		/**
		 * Holds the instance of the plugin currently in use.
		 *
		 * @since 1.0.0
		 *
		 * @var UQB\Plugin\UQB
		 */
		private static $instance;

		/**
		 * Plugin version for enqueueing, etc.
		 * The value is retrieved from the UQB_VERSION constant.
		 *
		 * @since 1.0.0
		 *
		 * @var string
		 */
		public $version = '';

		/**
		 * Paid returns true, free (Lite) returns false.
		 *
		 * @since 1.0.0
		 *
		 * @var boolean
		 */
		public $pro = false;

		/**
		 * The UQB options.
		 *
		 * @since 1.0.0
		 *
		 * @var array
		 */
		public $options = [];

		/**
		 * Main UQB Instance.
		 *
		 * Insures that only one instance of UQB exists in memory at any one
		 * time. Also prevents needing to define globals all over the place.
		 *
		 * @since 1.0.0
		 *
		 * @return UQB The ultimate query builder plugin instance.
		 */
		public static function instance() {

			if ( null === self::$instance || ! self::$instance instanceof self ) {
				self::$instance = new self();
				self::$instance->init();
			}

			return self::$instance;
		}

		/**
		 * Initialize Ultimate Query Builder
		 *
		 * @return void
		 */
		private function init() {
			$this->constants();
			$this->includes();
			$this->preLoad();
			$this->load();
		}

		/**
		 * Runs before we load the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private function preLoad() {
			$this->db = new Common\Database();
		}

		/**
		 * Setup plugin constants.
		 * All the path/URL related constants are defined in main plugin file.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private function constants() {
			$defaultHeaders = [
				'name'    => 'Plugin Name',
				'version' => 'Version',
			];

			$pluginData = get_file_data( UQB_FILE, $defaultHeaders );

			$constants = [
				'UQB_PLUGIN_BASENAME'   => plugin_basename( UQB_FILE ),
				'UQB_PLUGIN_NAME'       => $pluginData['name'],
				'UQB_PLUGIN_SHORT_NAME' => 'UQB',
				'UQB_PLUGIN_URL'        => plugin_dir_url( UQB_FILE ),
				'UQB_VERSION'           => $pluginData['version']
			];

			foreach ( $constants as $constant => $value ) {
				if ( ! defined( $constant ) ) {
					define( $constant, $value );
				}
			}

			$this->version = UQB_VERSION;
		}

		/**
		 * Including the new files with PHP 5.3 style.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private function includes() {
			require_once UQB_DIR . '/app/Common/Database/Database.php';
			require_once UQB_DIR . '/app/Common/Utils/Helpers.php';
			require_once UQB_DIR . '/app/Common/Admin/Admin.php';
			require_once UQB_DIR . '/app/Common/Utils/Blocks.php';
			require_once UQB_DIR . '/app/Common/Block/Query.php';
			require_once UQB_DIR . '/app/Common/Block/Main.php';
		}

		/**
		 * Load our classes.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function load() {
			$this->helpers = new Common\Utils\Helpers();
			$this->admin   = new Common\Admin\Admin();
			$this->query   = new Common\Block\Query();
			$this->block   = new Common\Block\Main();
		}
	}

}

namespace {
	// Exit if accessed directly.
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

	/**
	 * The function which returns the one UQB instance.
	 *
	 * @since 1.0.0
	 *
	 * @return UQB\Plugin\UQB The instance.
	 */
	function uqb() {
		return UQB\Plugin\UQB::instance();
	}
}