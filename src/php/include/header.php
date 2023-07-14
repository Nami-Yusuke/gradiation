<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php echo h($page['desctiption']); ?>">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="<?php echo h(TWITTER); ?>">
  <meta property="og:url" content="<?php echo h(SITE_URL); ?>">
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?php echo h($page['title']); ?>">
  <meta property="og:description" content="<?php echo h($page['desctiption']); ?>">
  <meta property="og:site_name" content="<?php echo h(SITE_NAME); ?>">
  <meta property="og:image" content="<?php echo h($page['image']); ?>">
  <meta property="og:locale" content="ja_JP">
  <link rel="canonical" href="<?php echo h(SITE_URL); ?>/">
  <link rel="stylesheet" href="<?php echo h(ROOT_PATH); ?>assets/css/common.css?<?php echo h(NOW); ?>">
  <link rel="shortcut icon" href="<?php echo h(ROOT_PATH); ?>favicon.ico">
  <link rel="apple-touch-icon" href="<?php echo h(ROOT_PATH); ?>apple-touch-icon.png">
  <link rel="author" href="<?php echo h(ROOT_PATH); ?>humans.txt">
  <title><?php echo h($page['title']); ?></title>
  <script src="<?php echo h(ROOT_PATH); ?>assets/js/main.bundle.js?<?php echo h(NOW); ?>" defer></script>
</head>
<body>
  <header>
    <h1><?php echo h(SITE_NAME); ?></h1>
  </header>
