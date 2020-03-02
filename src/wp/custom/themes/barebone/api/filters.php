<?php

//Add any custom fields to page preload, but dont overuse as it might slow down website.
add_filter('api_endpoint_custom_settings_preload_fields', function(array $fields, int $post_id) {
	//$fields['subtitle'] = 'my custom subtitle';
	return $fields;
}, 10, 2);

//Add something to menu items
add_filter('api_endpoint_custom_settings_menu_item', function($returnObject, $menu_item) {
	return $returnObject;
}, 10, 2);

//Add something to settings result, like footer details or other settings
add_filter('api_endpoint_custom_settings_result', function($result) {
	return $result;
},10 ,1);