import { CLASS, teg, Teg } from "@src/index"
/**2206221421
 * teg.html.default
 * HTMLпоУмолчаниюДляТега
 * html по умолчанию для тега
 * @export
 * @param {*} obj
 * @param {*} html
 * @param {*} p
 */
export function HTMLпоУмолчаниюДляТега(obj, html, p) {
    if (p.EX) html.EX = p.EX;

    if (html.f)
        html = teg(html.f, html.P);

    if (html.body == undefined)
        html.body = p.ex;

    let тег = new Teg(html);
}