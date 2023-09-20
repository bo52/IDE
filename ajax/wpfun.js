function wpfun_text(id, p = undefined) {
    let xmlhttp = new XMLHttpRequest();
    let host = '/wp-admin/admin-ajax.php';
    xmlhttp.open('POST', host, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    p.pfun = id;
    let json = JSON.stringify(p);
    json = json.replace(/&nbsp/g, ' ');
    xmlhttp.send("action=m&id=" + id + "&p" + encodeURIComponent(json));
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
            alert(xmlhttp.response);
        }
    };
}
function wpfun(id, p = undefined) {
    p = JSON.stringify(p);
    //alert(p);
    let DATA = "";
    $.ajax({
        url: '/wp-admin/admin-ajax.php',
        //'<?php echo admin_url( "admin-ajax.php" ) ?>',
        type: 'POST',
        data: 'action=m&id=' + id + '&p=' + p,
        beforeSend: function (xhr) { },
        success: function (data) {
            DATA = data;
        }, async: false
    });
    return DATA;
}
//wpfun('213123', { f: "gh" });
