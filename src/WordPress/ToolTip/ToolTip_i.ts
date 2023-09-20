import { ToolTip_num } from "@src/WordPress/ToolTip/ToolTip_num"
export class ToolTip_i {
    static ПроверкаЭлементов(Класс) {
        $("i").each(function (i, elem) {
            ToolTip_i.ПроверкаНаСовпадениеЭлемента(elem, Класс);
        })
    }
    static ЭтоСтрока(elem: any): JQuery<HTMLElement> { return $(elem).closest("li") }
    static ПроверкаНаСовпадениеЭлемента(elem, Класс) {
        if (this.ЭтоСтрока(elem).length == 0) return
        let info = new Класс(elem)
    }
    //курсивное начертание шрифта элемента
    teg: any
    get Строки(): JQuery<HTMLElement> { return ToolTip_i.ЭтоСтрока(this.teg) }
    get Контент(): JQuery<HTMLElement> { return this.Строки.next() }
    get Число(): JQuery<HTMLElement> { return $(this.Контент).find("li:last-child") }
    //
    Num: ToolTip_num
    constructor(elem: any) {
        this.teg = elem
        //NUMBER
        this.Num = new ToolTip_num(this)
        //задать класс элементу dom дерева
        $(this.teg).addClass("tooltip")
        //задать атрибуты 
        $(this.teg).attr("id", "tooltip" + this.Num.stNumber)
    }
    //"Имя" получить содержимое элемента dom дерева i
    get Name_html(): string { return $(this.teg).html() }
    get Name_div_html(): string { return '<div style="text-align:left;color:red">' + this.Name_html + '</div>' }

    ПоказатьИнфоЭлемента(span) {
        let content = $('#id' + this.Num.stNumber);
        if (content.closest($(span)).length == 0) {
            content.appendTo($(span))
        }
    }
}