function fun2309211143() {
    let test = pfun('jquery/classes/mysql.row.edit.2309211143/row.get.2309211232', 1)
}
//fun2309211143()
class class2309211143 {
    get КЛАСС() { return 'mysql2309211143-' }
    static event_edit(ev, elem) {
        ev.cancelBubble = true;
        let root = elem.closest('.tooltiptext')
        let Body = root.find('.body')
        let body = Body.text()
        let edit = Body.find('textarea').length

        Body.empty()
        if (edit == 0) {
            $('<textarea>' + body + '</textarea').appendTo(Body)
        } else {
            Body.html(body)
        }
        return false;
    }
    tooltiptext(ID, id) {
        //закрыть
        //обновить
        //сохранить
        //wp/post/get/post.get.2303031311
        //jquery/classes/mysql.row.edit.2309211143/row.get.2309211232
        let row = wpfun('wp/post/get/post.get.2303031311', id)
        row = JSON.parse(row)

        let body = 'empty';
        if (row.length == 1) {
            row = row[0];
            body = row.body;
        }
        let header = '<div class="tooltiptext-title"><a class="name" target="_block" href="https://codegid.ru/wp-admin/post.php?post=' + row.id + '&action=edit">' + row.title + '</a></div>'
        let excerpt = '<div class="exept">' + row.excerpt + '</div>'
        let Body = '<div class="body">' + body + '</div>'
        let tooltiptext = '<span id="' + ID + '" class="tooltiptext">' + header + excerpt + Body + '</span>'

        return $(tooltiptext).appendTo($('body'))
    }
    event_add(OBJ, id, el) {
        let ID = this.КЛАСС + id
        let content = $('#' + ID);
        if (content.length == 0) content = OBJ.tooltiptext(ID, id)
        if (content.closest($(el)).length == 0) {
            content.appendTo($(el));
        }
    }
    main() {
        let OBJ = this
        $('.post').find('span').each(function (i, elem) {
            elem = $(elem)
            if (elem.css('color') != 'rgb(255, 0, 0)') return;
            let b = elem.find('b');
            if (b.length != 1) return;
            let text = elem.text()
            //только цифры
            let id = text.replace(/\D/g, '')
            //только буквы
            let name = text.replace(/[0-9]/g, '')
            elem.addClass(OBJ.КЛАСС + id)
            elem.addClass('tooltip')
            elem.mouseover(function () {
                OBJ.event_add(OBJ, id, this)
            })
            elem.html(name)
        })
    }
}
var mysql = new class2309211143()
mysql.main()