import { jClass, СоединитьСвойстваОбъектов, teg, Teg } from "@src/index"
/**2309021513
 * teg.complex
 * СоздатьТег
 * создать тег
 * @export
 * @param {*} id
 * @param {*} p
 * @return {*} 
 */
export default function СоздатьТег(id: any, p = undefined) {
    //проверка на аттрибуты
    if (p == undefined) p = {};
    let t = id;

    if (typeof (id) != 'object') {
        //проверка на комплексность и вызов массива тег
        if (Array.isArray(id)) {
            Object.keys(id).forEach(function (key) {
                //obj.MergeRecursive
                t = СоединитьСвойстваОбъектов(t, teg(id[key], p));
            });
        } else return
    }
    return jClass(Teg, t, p)
}