/**
 * 2209121430
 * rgb.hsl.get.random
 * РандомныйЦвет
 * @export
 * @return {*} 
 */
export function РандомныйЦвет() {
    var h, s, l, hsl;
    //var r=getRandomInt(0, 255);
    //var g=getRandomInt(0, 255);
    //var b=getRandomInt(0, 255);
    //var hsl=rgb2hsl(r,g,b);
    //использование Math.round() даст неравномерное распределение!
    let t_rgb_getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    h = t_rgb_getRandomInt(0, 35) * 10;
    s = t_rgb_getRandomInt(0, 10) * 10;
    s = s + '%';
    l = t_rgb_getRandomInt(0, 15) + 83;
    l = l + '%';
    hsl = 'hsl(' + h + ',' + s + ',' + l + ')';

    return hsl;
}