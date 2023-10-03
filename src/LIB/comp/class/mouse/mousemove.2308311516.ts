/**
 * 2308311516
 * КоординатыМыши
 * "координаты мыши через событие mousemove"
 * @export
 * @class КоординатыМыши
 */
export class КоординатыМыши {
    //mousemove
    static x: number = 0;
    static y: number = 0;
    static Обновить() {
        $(document).mousemove(function (e) {
            // @ts-ignore
            КоординатыМыши.x = e.pageX; // положения по оси X
            // @ts-ignore
            КоординатыМыши.y = e.pageY; // положения по оси Y
            // вывод результата в консоль
            console.log("X: " + КоординатыМыши.x + " Y: " + КоординатыМыши.y);
        })
    }
}
КоординатыМыши.Обновить()