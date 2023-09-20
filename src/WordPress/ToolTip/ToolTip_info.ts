import { ToolTip_i } from "@src/WordPress/ToolTip/ToolTip_i"
export class ToolTip_info extends ToolTip_i {
    constructor(elem: any) {
        super(elem)
        let OBJ = this
        //события элемента "курсивный"
        $(this.teg).mouseover(() => OBJ.ПоказатьИнфоЭлемента(this))
        this.НайтиЭлементыСовпадения()
    }
    ПроверкаЭлемента(elem: any) {
        if ($(elem).closest('.tooltiptext').length > 0) return false
        if ($(elem).hasClass('tooltiptext')) return false
        if ($(elem).find('.tooltip').length > 0) return false
        return true
    }
    НайтиЭлементыСовпадения() {
        let OBJ = this
        $("span:contains('" + this.Num.stNumber + "'):not('.tooltiptext')").each(function (i, elem) {
            OBJ.ОбработкаЭлементаСовпадения(elem)
        })
    }
    УлалениеПредЭлемента(elem: any) {
        let prev = $(elem).prev()
        if (prev.length > 0) prev.remove()
    }
    ОбработкаЭлементаСовпадения(elem: HTMLElement) {
        if (!this.ПроверкаЭлемента(elem)) return
        this.УлалениеПредЭлемента(elem)
        this.span_tooltip(elem)
    }
    span_tooltip(elem) {
        let OBJ = this
        $(this.Num.html_span_tooltip).insertAfter(elem)
        $(elem).mouseover(() => OBJ.ПоказатьИнфоЭлемента(this))
        $(elem).remove()
    }
}