<?php
// サニタイズ
function h($s) {
  return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

// CSRF対策用トークンの発行
function set_token() {
  if(!isset($_SESSION['token'])) {
    $_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(16));
  }
}

// CSRF対策用トークンの確認
function check_token() {
  if (empty($_POST['token']) || !hash_equals($_POST['token'], $_SESSION['token']) ) {
    echo "不正な投稿です。(Error:01)";
    exit;
  }
}

// 入力値に不正な値が無いかチェック
function check_input($val) {
  if (is_array($val)) {
    return array_map('check_input', $val);
  } else {
    // magic_quotes_gpcへの対策
    if (get_magic_quotes_gpc()) {
      $val = stripslashes($val);
    }
    // nullバイト攻撃対策
    if (preg_match('/\A[\r\n\t[:^cntrl:]]{0,1000}\z/u', $val) == 0) {
      exit('不正な投稿です(Error:02)');
    }
    // 文字コードチェック
    if (!mb_check_encoding($val, 'UTF-8')) {
      exit('不正な投稿です(Error:03)');
    }
    return $val;
  }
}


// 空白エラーチェック
function check_required( $required_list, $post ) {
  foreach( $required_list as $key => $val ) {
    if( empty($post[$key]) ) {
      $error[$key] = $val;
    }
  }
  return $error;
}
