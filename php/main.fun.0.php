<?php function fun0/*php.fun|php.fun|универсальная функция php*/($p){
$file=$p[0];
$attr=$p[1];
/*-----------------*/
$id=preg_split('/[^0-9]/i', $file, -1,PREG_SPLIT_NO_EMPTY)[0];
$fun=$GLOBALS['fun'][$id];//поиск в массиве
//нет в массиве и нужно загрузить
if (!$fun){
    return '';
    //$FILE=$file;
    //if (is_numeric($file)){
        //число
        //$FILE=fun2206091245/*file.find.path.first*/([$GLOBALS['path.funs'],$FILE]);
        //$FILE=$_SERVER['root'].$FILE;
    //} 
    //else//текст
        //$FILE=$GLOBALS['path.funs'].$FILE.'.php';
    //include_once $FILE;
}
return $GLOBALS['fun'][$id]($attr);
}$GLOBALS['fun'][0]=function($p){return fun0($p);}?>