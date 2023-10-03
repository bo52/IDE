/*
<ul>
<li class="toggle_span toggle_li">
 <u class="toggle_u" style="text-decoration">header</u>
</li>
<ul><li>text</li></ul> => <div class="toggle_div"><li>text</li></div>
</ul>
*/
class class2309181408 {
    Скрыть = false
    //настроенный
    event_slideToggle(elem) {
        let div = elem.next()
        let divs = $('.toggle_div').not(div)

        divs.removeClass('toggle_click')
        divs.not(div.parents('div')).hide()

        div.slideToggle()
        div.addClass('toggle_click')
    }
    constructor(Скрыть) {
        this.Скрыть = Скрыть
    }
    Тег_ВложенныйКонтент(elem) { return elem.next() }
    main() {
        this.toggle_rec()
        this.teg_color()
        this.teg_li_hide()
    }
    toggle_span(span) {
        let OBJ = this
        span.addClass("toggle_span")
        span.click(function () {
            OBJ.event_slideToggle($(this))
        })
    }
    /**************************************/
    get toggle_items() { return $("u:not(.toggle_u)") }
    Тег_Корень(e) { return $(e).closest('li') }
    /**************************************/
    toggle_div(root, ul) {
        let html = ul.html()
        ul.remove()

        let div = $('<div class="toggle_div">' + html + '</div>').appendTo(root)
        if (this.Скрыть) div.hide()
    }
    toggle_e(e) {
        if (e.hasClass('tooltip')) return
        if (e.hasClass('tooltiptext')) return
        e.addClass('toggle_u')
        let Root = this.Тег_Корень(e)
        //ul вложенный контент
        let ul = this.Тег_ВложенныйКонтент(Root)
        if (ul.length == 0) return
        Root.addClass("toggle_li")

        this.toggle_div(Root, ul)
        let span = Root.children().eq(0)
        this.toggle_span(span)
    }
    toggle_rec() {
        let items = this.toggle_items
        while (items.length > 0) {
            let e = items.eq(0)
            this.toggle_e(e)
            items = this.toggle_items
        }
    }
    teg_color() {
        let childs = $('.toggle_div')
        childs.each(function (i, e) {
            let color = $(e).parents('.toggle_div').length == 0 ? 'red' : 'green'
            $(e).prev().css('color', color)
        })
    }
    teg_li_hide() {
        let li = $('li.toggle_li:not([style*="display: none"]')
        li.each(function (i, LI) {
            LI = $(LI)
            let DIV = LI.children('.toggle_div')
            if (DIV.length == 0) return

            let Строки = DIV.children('li:not([style*="display: none"])')
            if (Строки.length == 0) {
                LI.hide()
                //добавить строку
                Строки = DIV.children('li')
                Строки.each(function (i, elem) {
                    let myid = $(elem).children('i').attr('id').replace(/\D/g, '')
                    $('<div>' + LI.children('u').text() + '</div>').appendTo($('#id' + myid))
                })

            }
        })
    }
}
new class2309181408(true).main()