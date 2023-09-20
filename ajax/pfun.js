function pfun(id, p, method = "GET", host = "/IDE/php/pfun.php") {
    if (p === void 0) { p = undefined; }
    p = JSON.stringify(p);

    if (method === void 0) { method = "GET"; }
    let DATA = "";
    $.ajax({
        method: method,
        url: host,
        data: {
            id: String(id),
            p: p,
        },
        success: function (data) {
            DATA = data;
        },
        async: false
    });
    if (DATA[0] == '\"' && DATA[DATA.length - 1] == '\"') {
        DATA = DATA.substr(1);
        DATA = DATA.substr(0, DATA.length - 1);
    }
    DATA = DATA.replace(/\"\"/gs, '"');
    return DATA;
}