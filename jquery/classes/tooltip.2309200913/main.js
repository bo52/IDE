function get_root_click(number, id) {
    $('<a href="#tooltip' + id + '" style="float:right;color:red;text-align:end;font-size:8pt">' + id + '</a>').insertAfter(number)
}

function add_2309201006(id, el) {
    let content = $('#id' + id);
    if (content.closest($(el)).length == 0) {
        content.appendTo($(el));
    }
}

function get_ID(elem) {
    let li = $(elem).closest("li")
    if (li.length == 0) return 0
    $(elem).addClass("tooltip")

    let obj = {}
    let info = li.next()
    let number = info.find("li:last-child")
    obj.info = info.html()

    obj.id = number.text()
    $(elem).attr("id", "tooltip" + obj.id)
    fun2201231017(elem, 'click', function () {
        add_2309201006(obj.id, this);
    })

    get_root_click(number, obj.id)

    number.remove()
    info.remove()
    return obj
}
function get_Name(elem) {
    let obj = {
        text: elem.text(),
        name: '',
        s: '',
        subname: '',
    }
    let numbers = []
    let ARR = [':', '?', '(']

    for (let i = 0; i < 3; i++) {
        let t = obj.text.indexOf(ARR[i])
        if (t == -1) t = 1000000
        numbers.push(t)
    }
    const min = Math.min.apply(null, numbers)
    if (min != -1) {
        obj.subname = obj.text.substring(min + 1)
        obj.name = obj.text.substring(0, min)
        if (min != 1000000)
            obj.s = ARR[numbers.indexOf(min)]
    }
    return obj
}

function tooltiptext_2309201010(ELEM, INFO) {
    let header = INFO.NAME.name
    //let body = '<span style="width:100%" id="uses' + INFO.id + '" class="tooltiptext"></span>'
    let elem = '<span class="tooltip">' + header + '</span>'

    header = '<div class="tooltiptext-title">' + elem + INFO.NAME.s + INFO.NAME.subname + '</div>'

    let tooltiptext = '<span id="id' + INFO.id + '" class="tooltiptext">' + header + INFO.info + '</span>'
    $(tooltiptext).appendTo($('body'))
}

function copy_bool_2309201045(elem) {
    if (elem.closest('.tooltiptext').length > 0) return true
    if (elem.hasClass('tooltiptext')) return true
    if (elem.find('.tooltip').length > 0) return true
    return false
}
function copy_prev_2309201050(elem, info) {
    let prev = elem.prev();
    if (prev.length > 0) {
        prev.html(prev.html().replace(info.NAME.text, ''));
        prev.html(prev.html().replace(info.id, ''));
    }
}
function copy_2309201042(elem, info) {
    let rows = []
    if (copy_bool_2309201045(elem)) return

    copy_prev_2309201050(elem, info)

    let sub = elem.text()
    sub = sub.replace(info.NAME.text, '')
    sub = sub.replace(info.id, '')
    let row = $('<span OnMouseover="add_2309201006(' + info.id + ',this)" class="tooltip"><b style="color: #ff00fe;">' + info.NAME.name + sub + '</b></span>').insertAfter(elem);
    elem.remove()
}

$("i").each(function (i, elem) {
    elem = $(elem)
    let info = get_ID(elem)
    if (info == 0) return
    info.NAME = get_Name(elem)
    tooltiptext_2309201010(elem, info)

    let rows = []
    $("i:contains('" + info.id + "'):not('.tooltiptext')").each(function (i, elem) {
        copy_2309201042($(elem), info)
    })
})