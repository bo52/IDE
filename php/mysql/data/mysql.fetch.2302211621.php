<?php function fun2302211621/*mysql.fetch|fetch|результат запроса в массив*/($p){
$arr=[];
while ($row = mysqli_fetch_array($p, MYSQLI_ASSOC)) {
    //проверка эха пустой строки
    foreach ($row as $key=>$value) {
            if ($value=='') $row[$key]='NULL';
    }
    $arr[]=$row;
}
return json_encode($arr);
}
$GLOBALS['fun'][2302211621]=function($p){
	return fun2302211621($p);
}
?>