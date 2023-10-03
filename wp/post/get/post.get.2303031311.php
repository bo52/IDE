<?php function fun2303031311/*post.get|post.get|получить полную ссылку и контент поста*/($p){
    $post=get_post($p);
    
    $post_categories = wp_get_post_categories($p);
    $link='';
    foreach( $post_categories as $c ){
        $cat = get_category($c);
        $cat = '<a style="text-decoration: none;color:green;margin-left:2px" href="'.get_category_link($cat->term_id).'">'.$cat->name.'</a>';
        $link=$cat.'/'.$link;
    }

    $title=get_the_title($post);
    $obj=(object) [
        'id'=>$p,
        'title'=>urldecode($title),
        'name'=>urldecode($post->post_name),
        'content'=>$post->post_content,
        'link'=>$link,
        'excerpt'=>$post->post_excerpt,
    ];
    $json=json_encode($obj);
    return $json;
}$GLOBALS['fun'][2303031311]=function($p){return fun2303031311($p);}?>