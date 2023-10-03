import { bo52 } from "@src/index"
/**
 * 2309012013
 * jfun.ev
 * jfun_ev
 * @export
 * @param {*} p
 * @return {*} 
 */
export function jfun_ev(p) {
    let ev = p[0];
    let el = p[1];
    let number = p[2];
    if (Array.isArray(number)) {
        Object.keys(number).forEach(function (key) {
            bo52.f[number[key]].data(el, ev);
        }, number);
        return 'array';
    }

    if (typeof (number) == 'function') {
        return number(el, ev);
    }
    return bo52.f[number].data(el, ev);
}