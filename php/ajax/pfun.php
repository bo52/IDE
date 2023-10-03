<?php
header('Content-Type: text/html; charset=utf-8');
header('Content-type: text/html');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "origin, x-requested-with, content-type");
header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
$GLOBALS['ajax'] = true;
$file = $_GET['file'];
$attrs_json = $_GET['attrs'];
include_once __DIR__.'/fun.php';
$GLOBALS['ajax'] = false;
?>