<?php

//This will be pages, posts and all custom post types
$allPostTypes = lbb_getAllPostTypes();

add_action('rest_api_init', function () {

	// Add which post types and what the field is called.
	// Example post types: ['pages', 'posts']
	// Field name can not be: "fields", "custom" or "meta_seo" as these are reserved in the barebone.

	/* Remove comment to use
	register_rest_field($allPostTypes, 'my_field_name', [
		'get_callback' => function ($post_arr) {
			//Do magic inside here, and return value;
			return 'MyFieldName Value is here!';
		},
		'schema'       => [
			'description' => __('Add description here!'),
			'type'        => 'string' // What kind of return is it? Can be: object,array,string,int
		]
	]);*/

});
