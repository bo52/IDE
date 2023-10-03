/**2208290928
 * teg.CSS.add
 * fun2208290928
 * CSS добавить для тега
 * @export
 * @param {*} p
 * @return {*} 
 */
export default function fun2208290928(p) {
    if (p.CSS == undefined) return;
    if (Array.isArray(p.CSS)) {
        // @ts-ignore
        Array.from(p.CSS, (key) => {
            let css = String(key);
            p.ex.addClass('css' + css);
        });
    } else {
        let css = String(p.CSS);
        p.ex.addClass('css' + css);
    }
}