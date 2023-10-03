<?php
//привязать к functions.php в wordpress = include_once $_SERVER['DOCUMENT_ROOT'].'/IDE/php/ajax/wp/wpfun.php';
add_action('wp_ajax_m', 'wp_main_ajax'); // wp_ajax_{ЗНАЧЕНИЕ ПАРАМЕТРА ACTION!!}
add_action('wp_ajax_nopriv_m', 'wp_main_ajax');  // wp_ajax_nopriv_{ЗНАЧЕНИЕ ACTION!!}
// первый хук для авторизованных, второй для не авторизованных пользователей
function wp_main_ajax()
{
    $GLOBALS['wp_ajax'] = true;
    $file = $_POST['file'];
    $attrs_json = $_POST['attrs'];
    include $_SERVER['DOCUMENT_ROOT'].'/IDE/php/ajax/fun.php';
    $GLOBALS['wp_ajax'] = false;
    die; // даём понять, что обработчик закончил выполнение
}
