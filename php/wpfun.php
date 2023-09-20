<?php
//привязать к functions.php в wordpress
add_action('wp_ajax_m', 'wp_main_ajax'); // wp_ajax_{ЗНАЧЕНИЕ ПАРАМЕТРА ACTION!!}
add_action('wp_ajax_nopriv_m', 'wp_main_ajax');  // wp_ajax_nopriv_{ЗНАЧЕНИЕ ACTION!!}
// первый хук для авторизованных, второй для не авторизованных пользователей
include_once (__DIR__) . '/../files/modules.php';
function wp_main_ajax()
{
    $GLOBALS['wp_ajax'] = true;
    $id = $_POST['id'];
    $p_json = $_POST['p'];

    $p_json = str_replace('\"', '"', $p_json);
    $p = json_decode($p_json, false);
    //echo $p->content;

    $GLOBALS['test'] = $_POST['id'];
    include __DIR__ . '/fun.php';
    $GLOBALS['wp_ajax'] = false;
    die; // даём понять, что обработчик закончил выполнение
}
