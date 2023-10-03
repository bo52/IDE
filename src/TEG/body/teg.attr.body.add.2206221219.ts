/**2206221219
 * teg.add.body
 * ДобавитьТегВТело
 * добавить тег в тело
 * @export
 * @param {*} teg
 * @param {*} body
 * @param {*} [key=undefined]
 * @return {*} 
 */
export function ДобавитьТегВТело(teg, body, key: any = undefined) {
  if (typeof (key) == 'number')
    return $(teg).insertBefore($(body.children().eq(key)));

  switch (key) {
    case 'children': return $(teg).appendTo(body);
    case 'children0': return $(teg).prependTo(body);
    case 'next': return $(teg).insertAfter(body);
    case 'children0.next': return $(teg).insertAfter($(body.children().eq(0)));
    default:
      return $(teg).appendTo(body);
  }
}