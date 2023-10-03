/**2208290910
 * teg.atr.class.add
 * ДобавитьКлассыТегу
 * добавить в тег классы
 * @export
 * @param {*} p
 * @return {*} 
 */
export function ДобавитьКлассыТегу(p) {
  if (p.classes == undefined) return;

  switch (typeof (p.classes)) {
    case 'string':
      let v = p.classes;
      //if (v.substr(0, 3)=='css')
      if (typeof (v) == 'number') v = String(v);

      p.ex.addClass(v);
      break;
    case 'number':
      //let css=pfun(2206171143,['projects/css/',p.classes]);
      //if (css!='') $(css).appendTo($('body'));
      p.ex.addClass(String(p.classes));
      break;
    default:
      for (var i = 0; i < p.classes.length; i++) {
        let v = p.classes[i];
        if (typeof (v) == 'number') {
          //let css=pfun(2206171143,['projects/css/',v]);
          //if (css!='') $(css).appendTo($('body'));
        }

        let str = String(v);
        p.ex.addClass(str);
      }
      break;
  }
}