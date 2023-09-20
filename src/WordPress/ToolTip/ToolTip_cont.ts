import { ToolTip_num } from "@src/WordPress/ToolTip/ToolTip_num"
export class ToolTip_cont {
    Content_html: string
    Num: ToolTip_num
    constructor(Num) {
        this.Num = Num
        this.teg_remove()
    }

    teg_remove() {
        let teg = this.Num.I.Контент
        this.Content_html = teg.html()
        $(this.html_tooltiptext).appendTo($(this.Num.I.teg))
        //удаление элемента
        teg.remove()
    }
    get html_tooltiptext(): string {
        return '<span id="id' + this.Num.stNumber + '" class="tooltiptext">' + this.Num.I.Name_div_html + this.Content_html + '</span>';
    }
}