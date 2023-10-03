/*
<li>
<span class="toggle_li toggle_u" style="text-decoration">header</span>
<ul><li>text</li></ul> => <div class="toggle_div"><li>text</li></div>
</li>
NEW
<li>
</li>
*/
class class2309181408_span extends class2309181408 {
    get toggle_items() { return $("span[style*='text-decoration: underline']:not(.toggle_u)") }
    Тег_Корень(span) {
        let header = span.html()
        span.empty()
        $('<u>' + header + '</u>').prependTo(span)
        return span
    }
    Тег_ВложенныйКонтент(root) {
        root.css('text-decoration', 'none')
        return root.next('ul')
    }
}
new class2309181408_span(true).main()