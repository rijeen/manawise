<?php

//Add any custom fields to page preload, but dont overuse as it might slow down website.
add_filter('api_custom_preload_fields', function(array $fields, int $post_id) {
	//$fields['subtitle'] = 'my custom subtitle';
	return $fields;
}, 10, 2);
