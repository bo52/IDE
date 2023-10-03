import { НомерДляТега } from "./teg.html.number.add.2206221426"
import { HTMLпоУмолчаниюДляТега } from "./teg.html.default.add.2206221421"
/**2206221319
 * teg.html.arr.add
 * ДобавитьHtmlМассивТегу
 * добавить html к тегу из массива
 * @export
 * @param {*} obj
 * @param {*} html
 * @param {*} p
 * @return {*} 
 */
export default function ДобавитьHtmlМассивТегу(obj, html, p) {
  if (Array.isArray(html) == false) return false;
  Object.keys(html).forEach(function (key) {

    if (ДобавитьHtmlМассивТегу(obj, html[key], p) == true)
      return;

    switch (typeof (html[key])) {
      //строка
      case 'string':
        $(obj.p.ex).html($(p.ex).html() + html[key]);
        break;
      //число
      case 'number':
        //teg.html.number.add
        НомерДляТега(obj, html[key], p);
        break;
      default:
        //body не обнаружен и родитель является тегом
        if (html[key] === undefined) return;

        if (html[key].body == undefined)//!!!
          if (p.ex) html[key].body = p.ex;
        //teg.html.default.add
        HTMLпоУмолчаниюДляТега(obj, html[key], p);
        break;
    }
  }, html);
  return true;
}