export var CLASS = []
/**
 * 2309011717
 * jClass
 * @export
 * @param {*} Класс
 * @param {*} p
 * @param {*} [P=undefined]
 * @return {*} 
 */
export function jClass(Класс, p, P = undefined) {
    if (P) { p.param = P }
    return new (Класс)(p);
}