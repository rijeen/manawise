<?php

/* Konfigurationsfil för acceptans-server.
 * Denna fil laddas ALDRIG upp till en produktionserver.
 */

//--- DB
define('DB_NAME', '');
define('DB_USER', '');
define('DB_PASSWORD', '');
define('DB_HOST', '');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

//--- URL och Sökvägar (Valfritt)
// Används främst om databasen innehåller felaktiga urler.
// define('WP_HOME', 'http://[url]');
// define('WP_SITEURL', 'http://[url]/core/');

//--- Salter
// Generera nya via: https://api.wordpress.org/secret-key/1.1/salt/
define('AUTH_KEY',         '');
define('SECURE_AUTH_KEY',  '');
define('LOGGED_IN_KEY',    '');
define('NONCE_KEY',        '');
define('AUTH_SALT',        '');
define('SECURE_AUTH_SALT', '');
define('LOGGED_IN_SALT',   '');
define('NONCE_SALT',       '');
