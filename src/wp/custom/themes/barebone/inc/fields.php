<?php

$post_types = lbb_getAllPostTypes();

register_rest_field($post_types, 'custom', [
	'get_callback' => function ($post_arr) {

		$return = null;

		if (empty($post_arr['password']) || (isset($_REQUEST['password']) && $_REQUEST['password'] == $post_arr['password'])) {
			if ($post_arr['template']) {
				$return = apply_filters('api_custom_template_' . str_replace('.php', '', $post_arr['template']), (object) [], $post_arr['id']);
			} else if ($post_arr['type']) {
				$return = apply_filters('api_custom_type_' . $post_arr['type'], (object) [], $post_arr['id']);
			}

			if ($return === $post_arr['id']) {
				return (object) [];
			}
		}

		return $return;
	},
	'schema'       => [
		'description' => __('Custom data based on post type or template'),
		'type'        => 'object'
	]
]);

register_rest_field($post_types, 'fields', [
	'get_callback' => function ($post_arr) {
		$return = (object) [];

		if (empty($post_arr['password']) || (isset($_REQUEST['password']) && $_REQUEST['password'] == $post_arr['password'])) {
			$fields = get_fields($post_arr['id']);
			if ($fields) {
				if (isset($fields['sections']) && is_array($fields['sections'])) {
					$sections = [];
					foreach ($fields['sections'] as $section) {
						$sectionName = $section['acf_fc_layout'];
						$sections[]  = apply_filters('api_custom_section_' . $sectionName, (object) $section);
					}
					$fields['sections'] = $sections;
				}
				$return = $fields;
			}
		}

		return $return;
	},
	'schema'       => [
		'description' => __('Custom fields'),
		'type'        => 'object'
	]
]);

register_rest_field($post_types, 'meta_seo', [
	'get_callback' => function ($post_arr) {

		$title = get_the_title($post_arr['id']);
		$description = str_replace('[&hellip;]', '' ,get_the_excerpt($post_arr['id']));

		if (get_field('seo_meta_title', $post_arr['id'])) {
			$title = get_field('seo_meta_title', $post_arr['id']);
		}

		if (get_field('seo_meta_description', $post_arr['id'])) {
			$description = get_field('seo_meta_description', $post_arr['id']);
		}

		return [
			'title' => $title,
			'description' => $description
		];
	},
	'schema'       => [
		'description' => __('Custom meta tags'),
		'type'        => 'object'
	]
]);

register_rest_field(['page'], 'is_front_page', [
	'get_callback' => function ($post_arr) {
		return $post_arr['id'] == get_option('page_on_front');
	},
	'schema'       => [
		'description' => __('Is front page'),
		'type'        => 'bool'
	]
]);