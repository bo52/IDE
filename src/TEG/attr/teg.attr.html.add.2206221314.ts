import { Teg, CLASS, bo52 } from "@src/index"
import { ДобавитьТегВТело } from "@TEG/body/teg.attr.body.add.2206221219"
import ДобавитьHtmlМассивТегу from "@TEG/html/teg.html.arr.add.2206221319"
/**2206221314
 * teg.atr.html.add
 * fun2206221314
 * добавить html к тегу
 * @export
 * @param {*} obj
 * @param {*} p
 */
export default function fun2206221314(obj, p) {
  //teg.html.arr
  if (p.html == undefined) return
  if (ДобавитьHtmlМассивТегу(obj, p.html, p) == true)
    return

  let teg
  switch (typeof (p.html)) {
    case 'string':
      p.ex.html(p.html);
      break;
    case 'number':
      let ts = teg(p.html, p);
      teg = new CLASS["teg"](ts);
      ДобавитьТегВТело(teg.data, p.ex);//atr.body.add
      break;

    case 'function':
      let f = p.html;
      Object.keys(f).forEach(function (key) {
        if (typeof (p.html[key]) == 'string') {
          p.html[key].ex = p.html[key];
        } else {
          if (p.EX != undefined) p.html[key].EX = p.EX;
          p.html[key] = new Teg(p.html[key]);
        }
        let data = p.html[key];
        let body = p.ex;
        ДобавитьТегВТело(data.ex, body, data.add);//atr.body.add
      }, f);
      break;

    default:
      if (p.EX != undefined) p.html.EX = p.EX;

      if (p.html.f) {
        p.html = teg(p.html.f, p.html.P);
        p.html.body = p.ex;
      }
      teg = new Teg(p.html);
      let data = teg.p;
      let body = p.ex;

      ДобавитьТегВТело(data.ex, body, data.add);//atr.body.add
      break;
  }
}