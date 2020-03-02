<?php

function lbb_acf_seo()
{
	acf_add_local_field_group(array(
		'key'                   => 'group_5cb823dcceeb0',
		'title'                 => 'SEO',
		'fields'                => array(
			array(
				'key'               => 'field_5cb823e5e4f21',
				'label'             => 'Meta titel',
				'name'              => 'seo_meta_title',
				'type'              => 'text',
				'instructions'      => 'Som standard används sidans titel. Ange max 60 tecken.',
				'required'          => 0,
				'conditional_logic' => 0,
				'wrapper'           => array(
					'width' => '',
					'class' => '',
					'id'    => '',
				),
				'default_value'     => '',
				'placeholder'       => '',
				'prepend'           => '',
				'append'            => '',
				'maxlength'         => '',
			),
			array(
				'key'               => 'field_5cb82409e4f22',
				'label'             => 'Meta beskrivning',
				'name'              => 'seo_meta_description',
				'type'              => 'textarea',
				'instructions'      => 'Som standard används ett kort utdrag från sidans innehåll. Ange max 160 tecken.',
				'required'          => 0,
				'conditional_logic' => 0,
				'wrapper'           => array(
					'width' => '',
					'class' => '',
					'id'    => '',
				),
				'default_value'     => '',
				'placeholder'       => '',
				'maxlength'         => '',
				'rows'              => 4,
				'new_lines'         => '',
			),
		),
		'location'              => array(
			array(
				array(
					'param'    => 'post_type',
					'operator' => '!=',
					'value'    => 'custom',
				),
			),
		),
		'menu_order'            => 0,
		'position'              => 'side',
		'style'                 => 'default',
		'label_placement'       => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen'        => '',
		'active'                => true,
		'description'           => '',
	));
}



add_action('acf/init', 'lbb_acf_seo');