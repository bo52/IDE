/**2206221301
 * teg.body.edit
 * ОпределитьТелоДляТега
 * определить body для тега
 * @export
 * @param {*} p
 * @return {*} 
 */
export function ОпределитьТелоДляТега(p) {
  if ($('body').length == 0) {
    //document.body = document.createElement("body");
  } else {
    let body = p.body;
    //элемент найден
    if (body != undefined)
      switch (typeof (p.body)) {
        case 'number': return $('.' + p.body);
        case 'string':
          body = $(p.body);
          if (body.length == 0) body = $('#' + p.body);
          if (body.length == 0) body = $('.' + p.body);
          if (body.length == 0) body = $('.class' + p.body);
          if (body.length != 0) return body;
        default:
          return p.body;
      }
  }
  return $('body');
}