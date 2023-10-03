import { Teg_show, bo52, ДобавитьСобытиеОбъекту, ПоказатьЭлементМышью, teg, injectable, inject, TYPES, Fm_body } from "@src/index"
import './style.css'
//menu.ev.show
//событие вызывает глобальное меню
export interface IMenu_2206161052 {

}
@injectable()
export class Menu_2206161052 extends Teg_show implements IMenu_2206161052 {
    //arg:[{name:'key',title:'ключ к выполнению js функции для menu'},{name:'ev',title:'event'},{name:'el',title:'element'}],
    main(arg) {
        if (arg.fun.length == 0) return true
        // Блокируем всплывание события contextmenu
        arg.ev = arg.ev || window.event;
        arg.ev.cancelBubble = true;
        // Показываем собственное контекстное меню
        this.Teg.css('display', '')
        this.Teg.empty()
        let M = arg.fun({ menu: this.Teg, el: arg.el })
        if (M) {
            M.body = this.Teg
            teg(M)
        }

        //показать рядом
        ПоказатьЭлементМышью(this.Teg)
        // Блокируем всплывание стандартного браузерного меню
        return false
    }
    ev_none() {
        this.Teg.css('display', 'none')
    }
    static Instance: Menu_2206161052
    override fun_teg(ex: any): void {
        Menu_2206161052.Instance = this
        super.fun_teg(ex)
        this.ev_none()
        ДобавитьСобытиеОбъекту(document, 'contextmenu', () => Menu_2206161052.Instance.ev_none())
        ДобавитьСобытиеОбъекту(document, "click", () => Menu_2206161052.Instance.ev_none())
    }
    override get TEG() {
        return {
            classes: 'MENU',
            attr: { id: 'contextMenuId' },
            css: 'menu',
            html: ['test']
        }
    }
}
