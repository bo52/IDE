<?php 
include_once $_SERVER['DOCUMENT_ROOT'].'/IDE/php/mysql/data/mysql.fetch.2302211621.php';
function fun2309211232/*file.get|empty|empty*/($id){
    $db=(object) [
        'server' => 'mysql.9042291348.myjino.ru',
        'user' =>'9042291348',
        'password' => '[htydfvfytljcneg',
        'base' =>'9042291348',
        'table' => 'syntax',
        'id' => $id,
    ];
    $mysqli=mysqli_connect($db->server, $db->user, $db->password) or die("Could not connect: " . mysql_error());
    mysqli_select_db($mysqli, $db->base);

    $query="SELECT * FROM `".$db->table."` WHERE `id`='".$db->id."'";
    $result = mysqli_query($mysqli,$query);

    $arr=fun2302211621($result);
    mysqli_free_result($result);
    return $arr;
}
$GLOBALS['fun'][2309211232] = function ($p) {
    return fun2309211232($p);
}
?>