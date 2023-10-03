//wpfun('213123', { f: "gh" });
function wpfun(file, attrs = undefined) {
    attrs = JSON.stringify(attrs)
    //alert(p);
    let DATA = ""
    $.ajax({
        url: 'https://codegid.ru/wp-admin/admin-ajax.php',
        //'<?php echo admin_url( "admin-ajax.php" ) ?>',
        type: 'POST',
        data: 'action=m&file=' + file + '&attrs=' + attrs,
        beforeSend: function (xhr) { },
        success: function (data) {
            DATA = data;
        }, async: false
    })
    return DATA;
}
