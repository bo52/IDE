<?php function fun2301201542/*mysql.query|query|выполнить текстовый запрос на существование строки*/($p)
{
    $db = $p[0]; //имя базы данных
    $table = $p[1]; //таблица
    $id = $p[2]; //id

    $mysqli = fun220992100($db);
    $query = "SELECT name,body,id FROM " . $table . " WHERE `id`='" . $id . "'";
    $result = mysqli_query($mysqli, $query);
    $count = mysqli_num_rows($result);
    return $count > 0;
}
$GLOBALS['fun'][2301201542] = function ($p) {
    return fun2301201542($p);
};
