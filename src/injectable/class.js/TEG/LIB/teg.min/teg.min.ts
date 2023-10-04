import { injectable, teg } from "@src/index"
/* empty
 * empty
 * абстрактный тег
 * свойство TEG (без определения куда рзмещать!)
 * функция TEG_jquery (с одним аргументом body куда рзмещать!)
 * функция TEG_arg (с абстрактным аргументами, где может быть body!)
 * @interface int2304181703
 */
export interface ITeg_min {
    ARGS
    TEG_jquery(ARGS): JQuery<HTMLElement>
    get TEG(): {}
    fun_teg(ex)
    Teg: JQuery<HTMLElement>
}
@injectable()
export class Teg_min implements ITeg_min {
    ARGS
    TEG_jquery(ARGS = undefined): JQuery<HTMLElement> {
        this.ARGS = ARGS
        return teg(this.TEG)
    }
    get TEG(): {} {
        return {
            fun: (ex: any) => this.fun_teg(ex)
        }
    }
    fun_teg(ex: any) {
        this.Teg = ex
    }
    Teg: JQuery<HTMLElement>
}