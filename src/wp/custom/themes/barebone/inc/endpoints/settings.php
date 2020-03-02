<?php

/* Tip: Override return data with filters in /api/filters.php */
function custom_settings(WP_REST_Request $request)
{
	$result = (object) [
		'general' => (object) [
			'title' => get_bloginfo('name'),
			'description' => get_bloginfo('description')
		],
		'menus' => (object) [],
		'config' => (object) [
			'defaultPageSlug' => get_post_field('post_name', get_option('page_on_front')),
			'cpt' => [
				[
					'type' => 'post',
					'rewrite' => preg_replace('/[\/]|%postname%/', '', get_option('permalink_structure')),
					'endpoint' => 'posts'
				]
			]
		],
		'sitemap' => []
	];

	$post_types = get_post_types(['public' => true, '_builtin' => false]);
	foreach ($post_types as $post_type) {
		$cpt = get_post_type_object($post_type);
		$result->config->cpt[] = [
			'type' => $post_type,
			'rewrite' => $cpt->rewrite['slug'],
			'endpoint' => $post_type
		];
	}

	$locations = get_nav_menu_locations();
	foreach ($locations as $location => $menuID) {
		$object = wp_get_nav_menu_object($menuID);

		$items = [];

		$menuItems = wp_get_nav_menu_items($menuID);
		if ($menuItems) {
			foreach ($menuItems as $menuitem) {
				$i = (object)[];
				$i->id = $menuitem->ID;
				$i->url = $menuitem->url;
				$i->slug = get_post_field('post_name', $menuitem->object_id);
				$i->title = $menuitem->title;
				$i->class = implode(" ", $menuitem->classes);
				$i->target = $menuitem->target;
				$i->parent = (int) $menuitem->menu_item_parent;
				$items[] = $i;
			}
		}

		$result->menus->{$location} = (object) [
			'title' => $object->name,
			'items' => $items
		];
	}

	if ($request->get_param('enableSitemap')) {
		$query = new WP_Query([
			'post_type' => 'page',
			'posts_per_page' => - 1,
			'fields' => 'ids'
		]);

		foreach ($query->get_posts() as $page_id) {
			$template = str_replace('.php', '', get_page_template_slug($page_id));
			$fields = apply_filters('api_custom_preload_fields', [], $page_id);

			$result->sitemap[] = [
				'slug' => get_post_field('post_name', $page_id),
				'title' => get_the_title($page_id),
				'template' => $template,
				'is_front_page' => $page_id == get_option('page_on_front'),
				'fields' => $fields,
				'custom' => (object) []
			];
		}
	}

	wp_cron();

	return $result;
}

register_rest_route('custom/v2', '/settings/', [
	'methods' => 'GET',
	'callback' => 'custom_settings',
	'args'     => [
		'enableSitemap' => [
			'required'=> false
		]
	]
]);
