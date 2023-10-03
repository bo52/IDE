/**2208290916
 * teg.atr.prop.add
 * fun2208290916
 * добавить в тег свойства
 * @export
 * @param {*} p
 * @return {*} 
 */
export default function fun2208290916(p) {
    if (p.prop == undefined) return;

    switch (typeof (p.prop)) {
        case 'string':
            if (p.prop == '') return;
            p.ex.prop(p.prop);
            break;
        default:
            Object.keys(p.prop).forEach(function (key) {
                p.ex.prop(key.replace('_', '-'), p.prop[key]);
            }, p.prop);
    }
}