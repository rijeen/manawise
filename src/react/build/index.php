<?php

define('WP_USE_THEMES', false);

require('./wp/core/wp-blog-header.php');

?>

<!DOCTYPE html>
<html lang="sv">
<head>
	<meta charset="UTF-8" />
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/style.<?php echo filemtime('style.min.css'); ?>.min.css" />
	<link rel="icon" href="assets/img/favicon.png" type="image/x-icon">
    <script>
        var _nonce = "<?php echo wp_create_nonce( 'wp_rest' ); ?>";
    </script>
</head>
<body id="body">
<div id="root">

</div>
<script src="/bundle.<?php echo filemtime('bundle.js'); ?>.js"></script>
</body>
</html>
