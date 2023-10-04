//btns.inline
import { СоединитьСвойстваОбъектов, Fm_ts_23100031227, TYPES, injectable, inject, Teg_obj, Teg_body } from "@src/index"
import './style.css'
@injectable()
export class Btns_inline extends Teg_body {
    private struct: { attr: { src: string } }[] = []
    public set Структура(val) {
        this.struct = val
    }

    //modif = undefined
    override get TEG() {
        return {
            classes: 'btns',
            html: Array.from(this.struct, (
                item: { attr: { src: string } }, index) => {
                let img = {
                    teg: 'img',
                    classes: ['btns-inline-img'],
                    attr: {
                        title: item.attr.src,
                    }
                }
                let M = СоединитьСвойстваОбъектов(img, item, true)
                return M
            })
            //modif: modif,
        }
    }
}