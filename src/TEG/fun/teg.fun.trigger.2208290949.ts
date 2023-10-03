import { jfun_ev } from "@src/index"
/**2208290949 
 * teg.funs.trigger
 * ВыполнитьФункциюПослеСозданияТега
 * выполнить функцию после создания тега
 * @export
 * @param {*} fun
 * @param {*} ex
 * @return {*} 
 */
export function ВыполнитьФункциюПослеСозданияТега(fun, ex) {
    //проверка функции на существование
    if (fun == undefined)
        return;
    //проверка на тип функции
    switch (typeof (fun)) {
        case 'number':
            jfun_ev([undefined, ex, fun]);
            break;
        default:
            //выполнение функции
            fun(ex);
            break;
    }
}