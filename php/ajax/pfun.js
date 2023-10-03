function pfun(file, attrs, method = "GET", host = "https://codegid.ru/IDE/php/ajax/pfun.php") {
    if (method === void 0) { method = "GET"; }
    //attrs
    //attrs={ prop: value } атрибуты в виде объекта для JSON
    if (attrs === void 0) { attrs = undefined; }
    attrs = JSON.stringify(attrs);

    let DATA = "";
    $.ajax({
        method: method,
        url: host,
        data: {
            file: String(file),
            attrs: attrs,
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