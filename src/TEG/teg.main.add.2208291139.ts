import { СоединитьСвойстваОбъектов, УникНомерПоДате } from "@src/index"
import { ОпределитьТелоДляТега } from "./body/teg.body.edit.2206221301"
import { ДобавитьВТегДанные } from "./data/teg.attr.data.add.2208290901"
import { ДобавитьСобытияТегу } from "./event/teg.attr.event.add.2208290938"
import { ДобавитьТегВТело } from "./body/teg.attr.body.add.2206221219"
import ДобавитьАтрибутыТегу from "./attr/teg.attr.add.2208290932"
import ДобавитьСинтаксисСтилиТегу from "./css/teg.attr.css.add.2208290924"
import ДобавитьИДСтилиТегу from "./css/teg.attr.CSS.add.2208290928"
import { ДобавитьКлассыТегу } from "./class/teg.attr.class.add.2208290910"
import ДобавитьСвойстваТегу from "./attr/teg.attr.prop.add.2208290916"
import ДобавитьHTMLТегу from "./attr/teg.attr.html.add.2206221314"
import ВыполнитьПослеСозданияТега from "./fun/teg.funs.trigger.2208290945"
/**2208291139
 * teg.add 
 * СозданиеТега
 * создание тега
 * @export
 * @param {*} obj
 * @param {*} p
 * @return {*} 
 */
export function СозданиеТега(obj, p) {
    if (typeof (p) == 'string') p = { teg: p }
    if (p.modif) {
        // @ts-ignore
        let modif = Object.assign({}, p.modif);
        delete p.modif;
        p = СоединитьСвойстваОбъектов(p, modif);
    }
    p.body = ОпределитьТелоДляТега(p);//body.edit

    if (p.teg == undefined) p.teg = 'div';
    //события
    let atr_data = ДобавитьВТегДанные(p);//data.create

    if (p.attr == undefined) p.attr = {}
    if (p.attr.id == undefined) p.attr.id = УникНомерПоДате()

    p.ex = '<' + p.teg + (p.code ? ' ' + p.code : '') + atr_data + '></' + p.teg + '>'
    p.ex = ДобавитьТегВТело(p.ex, p.body, p.add);//body.add

    if (p.data)
        Object.keys(p.data).forEach(function (key) {
            p.ex.data(key, p.data[key]);
        }, p.data);

    if (p.html == undefined) p.html = '';
    p.ex.data('ex', this);
    p.ex.data('EX', p.EX);

    ДобавитьАтрибутыТегу(p)
    ДобавитьСобытияТегу(p)
    ДобавитьСинтаксисСтилиТегу(p)
    ДобавитьИДСтилиТегу(p)
    ДобавитьКлассыТегу(p)
    ДобавитьСвойстваТегу(p)
    ДобавитьHTMLТегу(obj, p)
    ВыполнитьПослеСозданияТега(p, p.ex);//teg.funs.trigger
    return p.ex;
}