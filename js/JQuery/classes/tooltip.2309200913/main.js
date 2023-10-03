class class2309200913 {
    get_root_click(number, id) {
        $('<a href="#tooltip' + id + '" style="float:right;color:red;text-align:end;font-size:8pt">' + id + '</a>').insertAfter(number)
    }

    static event_add(id, el) {
        let content = $('#id' + id);
        if (content.closest($(el)).length == 0) {
            //if (!$(el).hasClass('tooltip')) el = $(el).closest('.tooltip')
            content.appendTo($(el));
            //insertAfter
        }
    }

    get_ID(elem) {
        let li = $(elem).closest("li")
        if (li.length == 0) return 0
        $(elem).addClass("tooltip")

        let obj = {}
        let info = li.next()
        let number = info.children("li:last-child")
        number.css('display', 'none')
        obj.info = info.html()

        obj.id = number.text()

        elem.attr("id", "tooltip" + obj.id)
        let html = elem.html()
        elem.empty()
        $('<div onmouseover="class2309200913.event_add(' + obj.id + ', this)"><b style="color: #ff00fe;">' + html + '</b></div>').appendTo(elem)
        this.get_root_click(number, obj.id)

        number.remove()
        info.remove()
        li.data('myid', 'obj.id')
        li.css('display', 'none')
        return obj
    }
    get_Name(elem) {
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

    tooltiptext(ELEM, INFO) {
        let header = INFO.NAME.name
        //let body = '<span style="width:100%" id="uses' + INFO.id + '" class="tooltiptext"></span>'
        let elem = '<span class="tooltip">' + header + '</span>'

        header = '<div class="tooltiptext-title">' + elem + INFO.NAME.s + INFO.NAME.subname + '</div>'

        let tooltiptext = '<span id="id' + INFO.id + '" class="tooltiptext">' + header + INFO.info + '</span>'
        $(tooltiptext).appendTo($('body'))
    }

    copy_bool_2309201045(elem) {
        if (elem.closest('.tooltiptext').length > 0) return true
        if (elem.hasClass('tooltiptext')) return true
        if (elem.find('.tooltip').length > 0) return true
        return false
    }
    copy_prev_2309201050(elem, info) {
        let prev = elem.prev();
        if (prev.length > 0) {
            prev.html(prev.html().replace(info.NAME.text, ''));
            prev.html(prev.html().replace(info.id, ''));
        }
    }
    copy_2309201042(elem, info) {
        let rows = []
        if (this.copy_bool_2309201045(elem)) return

        this.copy_prev_2309201050(elem, info)

        let sub = elem.text()
        sub = sub.replace(info.NAME.text, '')
        sub = sub.replace(info.id, '')
        let row = $('<span OnMouseover="class2309200913.event_add(' + info.id + ',this)" class="tooltip"><b style="color: #ff00fe;">' + info.NAME.name + sub + '</b></span>').insertAfter(elem);
        elem.remove()
    }
    main() {
        let OBJ = this
        $("i").each(function (i, elem) {
            elem = $(elem)
            let info = OBJ.get_ID(elem)
            if (info == 0) return
            info.NAME = OBJ.get_Name(elem)
            OBJ.tooltiptext(elem, info)

            let rows = []
            $("i:contains('" + info.id + "'):not('.tooltiptext')").each(function (i, elem) {
                OBJ.copy_2309201042($(elem), info)
            })
        })
    }
}
new class2309200913().main()