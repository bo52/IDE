<?php function fun2209141258/*mysql.query|query|выполнить текстовый запрос*/($p){
    $mysqli=fun220992100($p->db);
    $result = mysqli_query($mysqli,$p->quary);

    //mysql_free_result($result);
    return $p->quary;
}$GLOBALS['fun'][2209141258]=function($p){return fun2209141258($p);}?>