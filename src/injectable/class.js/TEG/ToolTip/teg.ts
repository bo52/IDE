import { Teg_body, teg, СоединитьСвойстваОбъектов, injectable, Teg_obj } from "@src/index"
import './style.css'
@injectable()
export class ToolTip_2304211344 extends Teg_body {
    fun_item(item) {
        return { html: item.name, event: { click: item.click } }
    }
    override TEG_body(struct) {
        let body = []
        if (struct != undefined) {
            body = [
                Array.from(struct, (item: { name: string, click: any, data: any }) => {
                    return {
                        classes: ['ToolTip_2304211344'],
                        html: [
                            this.fun_item(item),
                            this.TEG_tooltiptext(item.data)
                        ]
                    }
                })
            ]
        }
        return {
            html: body
        }
    }
    TEG_tooltiptext(ARGS) {
        //let OBJ = this
        return {
            classes: ['ToolTipText_2304211344', 'ToolTip_color_2304211344'],
            html: Array.from(ARGS, (item: { name: string, click: any, data: any }) => this.fun_item(item))
        }
    }
}