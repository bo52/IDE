/**2208290924
 * teg.css.add
 * fun2208290924
 * css добавить для тега
 * @export
 * @param {*} p
 * @return {*} 
 */
export default function fun2208290924(p) {
    if (p.teg == 'img') {
        if (p.css == undefined) p.css = {};
        //if(p.css.width==undefined) p.css.width='28px';
        //if(p.css.height==undefined) p.css.height='28px';
    }
    if (p.css == undefined) return;

    if (Array.isArray(p.css)) {
        // @ts-ignore
        Array.from(p.css, (key) => {
            let cs = 'css' + String(key)
            switch (typeof (key)) {
                case 'string':
                    cs = key
                    break
            }
            p.ex.addClass(key)
        });
    } else
        switch (typeof (p.css)) {
            case 'string':
                p.ex.addClass(p.css)
                break
            case 'object':
                Object.keys(p.css).forEach(function (key) {
                    p.ex.css(key.replace('_', '-'), p.css[key])
                }, p.css);
                break
        }
}
