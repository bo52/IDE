import { СоединитьСвойстваОбъектов, injectable, ITeg_show, Teg_show, bo52 } from "@src/index"
import './style.css'
//empty
//empty
//форма fm.abs.min в движении
export interface IFm_abs extends ITeg_show {
    ФормаВЦентре()
}
@injectable()
export class Fm_abs extends Teg_show implements IFm_abs {
    override get TEG(): {} {
        return СоединитьСвойстваОбъектов({
            classes: ['fm-abs'],
            html: {
                classes: ['fm-abs-body'],
            },
            event: {
                click: () => this.click()
            },
        }, super.TEG)
    }
    click() {
        this.Teg.css('z-index', () => {
            bo52.z += 1
            return bo52.z
        })
    }
    override show(args = undefined) {
        super.show(undefined)

        this.Teg.draggable()
        this.Teg.resizable()
        return this
    }
    ФормаВЦентре() {
        this.Teg.css('left', '50%')
        this.Teg.css('top', '50%')
    }
}