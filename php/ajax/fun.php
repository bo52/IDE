<?php
header('Content-Type: text/html; charset=utf-8');
header('Content-type: text/html');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "origin, x-requested-with, content-type");
header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

$path=$_SERVER['DOCUMENT_ROOT'].'/IDE/'.$file.'.php';
$p='';
if (file_exists($path)){
    include_once $path;
    //извлечь id
    $id=$file;
    $i=strrpos($id, "/");
    if ($i>0) $id=substr($id,$i+1);
    //$p=$i."=".$id;
    $id=preg_split('/[^0-9]/i', $id, -1,PREG_SPLIT_NO_EMPTY)[0];
    //создать класс для атрибутов
    $attrs = json_decode($attrs_json, false);
    if ($attrs == null) {
        $attrs_json = str_replace('\"', '"', $attrs_json);
        $attrs = json_decode($attrs_json, false);
    }
    if (!$attrs) $attrs = '';
    //поиск в массиве
    $fun=$GLOBALS['fun'][$id];
    //выполнение функции
    if ($fun) $p=$fun($attrs);
}
echo $p;
?>