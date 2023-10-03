import { teg, injectable } from "@src/index"
import './style.css'
//интерфейс класса
export interface ITEG_Custom {
    get TEG_jquery(): JQuery<HTMLElement>
    get TEG(): {}
    Teg: JQuery<HTMLElement>
}
//инжектируемая сущность т.е. она умеет работать с контейнером
@injectable()
export class TEG_Custom implements ITEG_Custom {
    get TEG_jquery(): JQuery<HTMLElement> { return teg(this.TEG) }
    get TEG(): {} {
        return {
            css: 'custom',
            html: 'test1',
            fun: (ex) => this.Teg = ex
        }
    }
    Teg: JQuery<HTMLElement>
}