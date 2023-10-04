//btn.close.min
import { injectable } from "@src/index"
import './style.css'
@injectable()
export class Btn_close_min {
    static get root() { return 'btn-close-root' }
    static get TEG() {
        return {
            attr: { src: "close" },
            classes: ['btn-close'],
            css: { float: 'right' },
            ev: {
                click: Btn_close_min_close
            }
        }
    }
}
export function Btn_close_min_close() {
    //alert()
    $(this).closest('.' + Btn_close_min.root).hide()
}