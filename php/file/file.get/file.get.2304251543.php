<?php function fun2304251543/*file.get|empty|empty*/($p)
{
    $FILE = $_SERVER['DOCUMENT_ROOT'] . '/' . $p;

    if (file_exists($FILE) == false) return "NULL";

    $fp = fopen($FILE, 'r');
    $length = filesize($FILE);
    $contents = $length > 0 ? fread($fp, $length) : '';
    fclose($fp);
    return $contents;
}
$GLOBALS['fun'][2304251543] = function ($p) {
    return fun2304251543($p);
}
?>