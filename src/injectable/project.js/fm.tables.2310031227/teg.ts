import { Btn_close_min, СоединитьСвойстваОбъектов, Btns_inline, Fm_abs, injectable, inject, TYPES } from "@src/index"
import './style.css'
export interface IFm_ts_23100031227 {

}
@injectable()
export class Fm_ts_23100031227 extends Fm_abs implements IFm_ts_23100031227 {
    static Instance: Fm_ts_23100031227
    constructor(@inject(TYPES.Btns) private btns: Btns_inline) {
        super()
        btns.Структура = [
            Btn_close_min.TEG
        ]
    }
    override get TEG(): {} {
        let OBJ = this
        return СоединитьСвойстваОбъектов({
            classes: ['fm-ts', Btn_close_min.root],
            html: [
                this.btns.TEG,
                { html: 'test' },
            ],
        }, super.TEG)
    }
    override fun_teg(ex: any): void {
        Fm_ts_23100031227.Instance = this
        super.fun_teg(ex)
    }
}