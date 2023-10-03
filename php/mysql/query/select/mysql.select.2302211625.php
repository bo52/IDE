<?php function fun2302211625/*mysql.fetch|fetch|результат запроса в массив*/($p){
$mysqli=fun220992100($p->db);
$result = mysqli_query($mysqli,'SELECT * FROM '.$p->table);

$arr=fun2302211621($result);
mysqli_free_result($result);
return $arr;
}$GLOBALS['fun'][2302211625]=function($p){return fun2302211625($p);}?>