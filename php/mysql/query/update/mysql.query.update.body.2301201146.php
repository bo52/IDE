<?php function fun2301201146/*mysql.query|query|обновить колонку body*/($p)
{
    $mysqli = fun220992100($p->db);
    return mysqli_query($mysqli, "UPDATE `" . $p->table . "` SET `body`='" . $p->body . "',`name`='" . $p->name . "',`description`='" . $p->description . "' WHERE `number`='" . $p->number . "'");
}
$GLOBALS['fun'][2301201146] = function ($p) {
    return fun2301201146($p);
};
