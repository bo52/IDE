import { Menu_2206161052, injectable, ITeg_min, Teg_min } from "@src/index"
// empty
// empty
//авто назначение объекту Teg и OBJ
export interface ITeg_obj extends ITeg_min {
    get МЕНЮ()
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
    get МЕНЮ() { return Menu_2206161052.Instance }
    override fun_teg(ex) {
        super.fun_teg(ex)
        ex.data('OBJ', this)
    }
}