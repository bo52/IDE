import { bo52, Menu_2206161052, УникНомерПоДате } from "@src/index"
/**2208290938
 * teg.attr.event.add
 * ДобавитьСобытияТегу
 * добавть события для тега
 * @export
 * @param {*} p
 * @param {*} [t=undefined]
 * @return {*} 
 */
export function ДобавитьСобытияТегу(p, t = undefined) {
    if (p.event == undefined) return '';

    Object.keys(p.event).forEach(function (key) {
        let body = p.event[key]

        if (Array.isArray(body)) {
            Object.keys(body).forEach(function (key) {
                ДобавитьСобытиеОбъекту(p.ex[0], key, body)
            }, body)
        } else
            ДобавитьСобытиеОбъекту(p.ex[0], key, body)
    }, p.event);
}
//addEvent
function ДобавитьМеню(e, ИмяСобытия, body) {
    if (ИмяСобытия != 'contextmenu') return false
    $(e).contextmenu((e) => Menu_2206161052.Instance.main({ fun: body, ev: e }))
    return true
}
//Функция для добавления обработчиков событий
export function ДобавитьСобытиеОбъекту(object, event, handler, useCapture = undefined) {
    if (ДобавитьМеню(object, event, handler)) return
    // Закрываем контекстное при клике левой или правой кнопкой по документу
    if (object.addEventListener) {
        object.addEventListener(event, handler, useCapture ? useCapture : false);
    } else if (object.attachEvent) {
        object.attachEvent('on' + event, handler);
    } else alert("Add handler is not supported");
}
function jfun_ev(p) {
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

function fun2301222004(body) {
    let id = УникНомерПоДате();
    bo52.f[id] = { arg: [], data: body };
    return '&quot;' + id + '&quot;';
}