<?php function fun2301231228/*mysql.query|query|обновить колонку body*/($p){
$mysqli=fun220992100($p->db);
$query="SELECT * FROM `".$p->table."` WHERE `number`='".$p->number."'";
$result = mysqli_query($mysqli,$query);

$arr=fun2302211621($result);
mysqli_free_result($result);
return $arr;
}$GLOBALS['fun'][2301231228]=function($p){return fun2301231228($p);}?>