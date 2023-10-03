import { teg, СоединитьСвойстваОбъектов, injectable, ITeg_min, Teg_min } from "@src/index"
// empty
// empty
//авто назначение объекту Teg и OBJ
export interface ITeg_obj extends ITeg_min {
    fun_teg(ex)
}
/**
 * авто назначение объекту Teg и OBJ
 *
 * @class class2304091930
 * @extends {teg2304181703}
 */
@injectable()
export class Teg_obj extends Teg_min {
    override TEG_jquery(ARGS = undefined): JQuery<HTMLElement> {
        this.ARGS = ARGS
        return teg(this.TEG2)
    }
    override fun_teg(ex) {
        super.fun_teg(ex)
        ex.data('OBJ', this)
    }
    get TEG(): {} {
        return {
            css: 'custom',
            html: 'test1',
        }
    }
    override get TEG2(): {} {
        let obj = this.TEG
        if (this.constructor.name == 'Teg_obj') {
            return obj
        }
        let obj2 = super.TEG2
        return СоединитьСвойстваОбъектов(obj, obj2)
    }
}