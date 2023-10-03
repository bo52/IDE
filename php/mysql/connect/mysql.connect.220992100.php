<?php function fun220992100/*mysql.db.connect|mysql.connect|соединение с базой данных*/($db){
//$charset="utf-8";
//echo phpinfo();
$dbhandle=mysqli_connect($db->server, $db->user, $db->password) or die("Could not connect: " . mysql_error());
//mysql_set_charset('utf8',$mysqli);
//mysql_select_db($db);
mysqli_select_db($dbhandle, $db->base);
    
return $dbhandle;
}
$GLOBALS['fun'][220992100]=function($p){
	return fun220992100($p);
}
?>