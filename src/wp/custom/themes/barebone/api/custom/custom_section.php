<?php

// Name of the section in ACF
// Example: newsblock -> api_custom_section_newsblock
add_filter('api_custom_section_*', function($section) {
	return $section;
});
