import { teg } from "@src/index"
import { HTMLпоУмолчаниюДляТега } from "@TEG/html/teg.html.default.add.2206221421"
/**2206221426
 * teg.html.number
 * НомерДляТега
 * html номер для тега
 * @export
 * @param {*} obj
 * @param {*} html
 * @param {*} p
 */
export function НомерДляТега(obj, html, p) {
    html = teg(html, p ? p.p : obj.p.p);
    HTMLпоУмолчаниюДляТега(obj, html, p);
}