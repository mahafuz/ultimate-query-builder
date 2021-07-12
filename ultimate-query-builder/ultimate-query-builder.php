<?php
/**
 * Plugin Name:       Ultimate Query Builder
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ultimate-query-builder
 *
 * @package           create-block
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'UQB_DIR' ) ) {
	define( 'UQB_DIR', __DIR__ );
}

if ( ! defined( 'UQB_FILE' ) ) {
	define( 'UQB_FILE', __FILE__ );
}

// Define the class and the function.
require_once( dirname( __FILE__ ) . '/app/UQB.php' );

uqb();