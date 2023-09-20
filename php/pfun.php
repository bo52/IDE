<?php
$GLOBALS['ajax'] = true;
if (array_key_exists('xmlhttp', $_POST)) {
    $p_json = $_POST['xmlhttp'];
    $p = json_decode($p_json, true);

    $id = $p['pfun'];
    //echo $p_json;
    //return;

    //$body=$_POST['body'];
    //$p['body']=$body;
    //echo $p_json;
    //echo '<pre>';
    //print_r(json_decode($p_json,true)['db']);
    //echo '</pre>';
    //return;
} else {
    header('Content-Type: text/html; charset=utf-8');
    $id = $_GET['id'];
    $p_json = $_GET['p'];
    //создать класс
    $p = json_decode($p_json, false);
    if ($p == null) {
        $p_json = str_replace('\"', '"', $p_json);
        $p = json_decode($p_json, false);
    }
}
include (__DIR__) . '/fun.php';
$GLOBALS['ajax'] = false;
