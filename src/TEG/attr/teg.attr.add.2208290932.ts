/**2208290932
 * teg.attr.add
 * fun2208290932
 * attr для тега
 * @export
 * @param {*} p
 * @return {*} 
 */
export default function fun2208290932(p) {
    if (p.teg == 'a') {
        if (p.attr == undefined) p.attr = {};
        if (p.attr.href == undefined)
            p.attr.href = '#';
    }

    if (p.attr == undefined) return;

    Object.keys(p.attr).forEach(function (key) {
        let val = this[key]
        if (key == 'src' && p.teg == 'img') {
            //const imageSrc = require('./../../../img/' + val + '.png')
            //const imgWrap = document.querySelector('#' + p.id)
            //const img = new Image()
            //img.src = imageSrc
            val = require('@img/' + val + '.png')
        }

        p.ex.attr(key.replace('_', '-'), val);
    }, p.attr);
}