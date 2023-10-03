import { КоординатыМыши, bo52 } from "@src/index"
//teg.show
export function ПоказатьЭлементМышью(ex: JQuery<HTMLElement>) {
    ex.show()
    //позиция
    ex.css('top', (КоординатыМыши.y + 5) + 'px')
    ex.css('left', КоординатыМыши.x + 'px')
    //поверх
    bo52.z += 1
    ex.css('zIndex', bo52.z)
    //движение
    //fun2301241421(ex);
}