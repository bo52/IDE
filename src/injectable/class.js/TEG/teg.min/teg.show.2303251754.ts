import { injectable, ITeg_obj, Teg_obj, ПоказатьЭлементМышью, bo52 } from "@src/index"
/** teg.show
 * teg.min.show.class
 * TEG содержит функцию teg_show (после создания объекта)
 * @interface ITeg_show
 * @extends {ITeg_obj}
 */
export interface ITeg_show extends ITeg_obj {
    //экземпляр с показом тега
    show(args)
}
/**
 * OBJ с функцией после создания show 
 *
 * @class class2303251754
 * @extends {Teg_obj}
 * @implements {ITeg_show}
 */
@injectable()
export class Teg_show extends Teg_obj implements ITeg_show {
    //FUNS = { pos: fun2304071349 }
    override fun_teg(ex: any): void {
        super.fun_teg(ex)
        this.show(undefined)
    }
    show(args) {
        ПоказатьЭлементМышью(this.Teg)
        return this
    }
    //поиск(открытие) объекта по классу и одиночке
    //static cs.Single всегда привязан к уникальному cs классу, который создаёт только один экземпляр
    static show(ARGS) {
        let cs = typeof (ARGS.cs) == 'string' ? eval(ARGS.cs) : ARGS.cs
        if (cs.Single?.Teg == undefined) {
            cs.Single = new cs(ARGS)
        } else {
            //выполнение скрытно через интерфейс
            (cs.Single as Teg_show).show(undefined);
        }
    }
    static show_id(ARGS) {
        let tID = $('.id' + ARGS.id)
        return tID.length == 0 ? new ARGS.cs(ARGS) : (tID.data('OBJ') as Teg_show).show(undefined)
    }
}
//найти файл
//bo52.f[2303251754] = (ARGS) => Teg_find_show.show(ARGS)