function wpfun_text(id, p = undefined) {
    let xmlhttp = new XMLHttpRequest();
    let host = 'https://codegid.ru/wp-admin/admin-ajax.php';
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