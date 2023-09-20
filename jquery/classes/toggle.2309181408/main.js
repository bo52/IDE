function toggle_items() {
    return $("u:not(.toggle_u)")
}
function toggle_e(e) {
    if (e.hasClass('tooltip')) return
    if (e.hasClass('tooltiptext')) return

    e.addClass('toggle_u')
    let li = $(e).closest('li')
    //ul вложенный контент
    let ul = li.next()
    if (ul.length == 0) return
    li.addClass("toggle_li")

    let html = ul.html()
    ul.remove()

    let div = $('<div class="toggle_div">' + html + '</div>').appendTo(li)
    //div.hide()

    let span = li.children().eq(0)
    span.addClass("toggle_span")
    span.click(function () {
        let div = $(this).next()
        let divs = $('.toggle_div').not(div)

        divs.removeClass('toggle_click')
        divs.not(div.parents('div')).hide()

        div.slideToggle()
        div.addClass('toggle_click')
    })
}
function fun_test() {
    let items = toggle_items()
    while (items.length > 0) {
        toggle_e(items.eq(0))
        items = toggle_items()
    }
    let childs = $('.toggle_div')
    childs.each(function (i, e) {
        let color = $(e).parents('.toggle_div').length == 0 ? 'red' : 'green'
        $(e).prev().css('color', color)
    })
}
fun_test()