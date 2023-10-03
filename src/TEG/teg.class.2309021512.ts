import { СозданиеТега } from "./teg.main.add.2208291139"
/**2309021512
 * teg.class
 * Teg
 * универсальный тег
 * @export
 * @class Teg
 */
export class Teg {
    data;
    p;
    get Data() { return this.data; }
    set Data(val) { this.data = val; }
    constructor(p) {
        this.p = p;
        this.Data = this.create_arr(p);
    }
    create_arr(p) {
        let data = {};
        //массив тегов
        if (Array.isArray(p) == true && p.length > 0) {
            Object.keys(p).forEach(function (key) {
                if (key == 'param') return;
                //teg.add
                data[key] = СозданиеТега(this, p[key]);
            }, p);
        } else
            //teg.add
            data = СозданиеТега(this, p);

        return data;
    }
}