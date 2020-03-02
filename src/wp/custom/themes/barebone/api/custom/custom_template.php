<?php

// Template name without .php
// Example: all_posts.php --> api_custom_template_all_posts
add_filter('api_custom_template_*', function($custom, $post_id) {
	return $custom;
}, 10, 2);
