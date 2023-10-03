import { СоединитьСвойстваОбъектов, injectable, ITeg_show, Teg_show, bo52 } from "@src/index"
import './style.css'
//empty
//empty
//форма fm.abs.min в движении
export interface IFm_abs extends ITeg_show {
    get TEG_body()
    ФормаВЦентре()
}
@injectable()
export class Fm_abs extends Teg_show implements IFm_abs {
    //после создания Формы
    get TEG_body() {
        return {
            classes: 'fm-abs-body',
            html: 'empty'
        }
    }
    override get TEG(): {} {
        return {
            classes: 'fm-abs',
            css: 'fm-abs',
            html: this.TEG_body,
            event: {
                click: () => this.click()
            },
        }
    }
    click() {
        this.Teg.css('z-index', () => {
            bo52.z += 1
            return bo52.z
        })
    }
    override show(args) {
        super.show(undefined)
        this.Teg.draggable()
        return this
    }
    ФормаВЦентре() {
        this.Teg.css('left', '50%')
        this.Teg.css('top', '50%')
    }
}