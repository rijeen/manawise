<?php

/**
 * Adds menus to wordpress back-office
 */
 
function lbb_register_menu() {
	register_nav_menu('main_menu', __('Huvudmeny'));
}
add_action('init', 'lbb_register_menu');
