<?php

// Name of the custom post type
// Example: logotypes -> api_custom_type_logotypes
add_filter('api_custom_type_page', function($custom, $post_id) {
	return $custom;
}, 10, 2);
