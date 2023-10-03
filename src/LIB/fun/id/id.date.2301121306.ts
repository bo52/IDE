/**
 * 2301121306
 * id.date
 * создать уникальный номер по дате
 * @export
 * @return {*} 
 */
export function УникНомерПоДате() {
    let d = new Date();
    let Y = String(d.getFullYear());
    let M = String(d.getMonth());
    let D = String(d.getDate());

    let h = String(d.getHours());
    let m = String(d.getMinutes());
    let s = String(d.getSeconds());

    return Y + M + D + h + m + s;
}