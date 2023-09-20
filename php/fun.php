<?php
include_once __DIR__ . '/include.php';
if (!$p) $p = '';

$text = '';
if (gettype($p) == 'string') $text = $p;
if (gettype($p) == 'array') $text = $p[0];
$isUnity = $text == 'unity';
/* выполнить функцию */
$p = fun0([$id, $p]);
//$p=str_replace($p, "\r\n", "");
//$p=str_replace($p, '#', '&#35;');
//$p=json_encode($p);
//$p=fun2209132257($p);

if ($isUnity)
    $p = iconv("windows-1251", "UTF-8", $p);
echo $p;
