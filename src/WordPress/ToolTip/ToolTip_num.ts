import { ToolTip_i } from "@src/WordPress/ToolTip/ToolTip_i"
import { ToolTip_cont } from "@src/WordPress/ToolTip/ToolTip_cont"
export class ToolTip_num {
    I: ToolTip_i
    Cont: ToolTip_cont
    constructor(I) {
        this.I = I
        this.Cont = new ToolTip_cont(this)
        this.teg_remove()
    }
    stNumber: number = 0
    get bNumber(): string { return '<b>' + this.stNumber + '</b>' }
    teg_remove() {

        let teg = this.I.Число
        this.stNumber = (Number)(teg.text())

        $(this.html_click).insertAfter(teg)
        teg.remove()
    }
    get html_click() {
        return '<a href="#tooltip' + this.stNumber + '" style="float:right;color:red;text-align:end;font-size:8pt">' + this.stNumber + '</a>'
    }
    get html_span_tooltip() {
        return '<span class="tooltip" style="color: #ff00fe;">' + this.bNumber + '</span>'
    }
}