import { ВыполнитьФункциюПослеСозданияТега } from "./teg.fun.trigger.2208290949"
/**2208290945
 * teg.funs.trigger
 * fun2208290945
 * выполнить функции после создания тега
 * @export
 * @param {*} p
 * @param {*} ex
 * @return {*} 
 */
export default function fun2208290945(p, ex) {
  if (p.fun == undefined) return;
  //проверка на массив функций
  if (Array.isArray(p.fun) == true) {
    //проверка на пустоту массива
    if (p.fun.length == 0) return;
    //обход массива функций
    Object.keys(p.fun).forEach(function (key) {
      ВыполнитьФункциюПослеСозданияТега(p.fun[key], ex);
    });
  } else {
    ВыполнитьФункциюПослеСозданияТега(p.fun, ex);
  }
}