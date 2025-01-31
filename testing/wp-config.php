<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'projectDB' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e|YpbuoOfg4n^/|gyYYh98$rh>C{]PSDu?Xs~oy?qn=~=-[HfY|O+lWa.n) x+*t' );
define( 'SECURE_AUTH_KEY',  'thzL.{}{(R0I1R5rjTruI$V#DJyeOUF~oCG=AHf;xPQhAh[*?Ox&$F)%4w(T.T+n' );
define( 'LOGGED_IN_KEY',    '&ED(S}mlqc`nY`3?B s{!KBc-XC)8-&o;.] WB)</<{a`|V*ncBdmC8iffGJpQ&^' );
define( 'NONCE_KEY',        '3e&09!ZtX9%fd*=+UPdC]DDst%~@Y~q/I?OGRgBUUgTpp_QXM-!+E)0h,jFf{Oc=' );
define( 'AUTH_SALT',        'j1fc0AN_=m7o-+#43=sS*+p-UXWo{4uI7;8_hR#X!v:J&Rt. yix:uA*Gic%jS#i' );
define( 'SECURE_AUTH_SALT', 'zM2&RJl5C<!iioD2;8$-v?EY=Hp%ThjVM8hu0Effkb45J,L*lBC/b!kp]RpR}x4L' );
define( 'LOGGED_IN_SALT',   'T.Gw#ad8<)R!y$(@WQ[wk*RMnxM3x!Q3)I=xc_x.J)X@`3P~9$4cqgZF1u1M]K@O' );
define( 'NONCE_SALT',       '3r1}JZ+?xTrs&?O44~.}?YLNmQhz:p@hy<iodNRs;3r:WN7%[/.V>bS=Y.T}q@Jz' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
