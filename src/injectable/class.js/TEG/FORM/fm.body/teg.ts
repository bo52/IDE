import { Teg_obj } from "@src/index"
import './style.css'
export class Fm_body extends Teg_obj {
    static Instance: Fm_body
    override fun_teg(ex: any): void {
        super.fun_teg(ex)
        Fm_body.Instance = this
    }

    override get TEG() {
        return {
            css: 'Fm-body',
            html: {
                html: [
                    { html: 'test' },
                    { html: 'test' },
                    { html: 'test' },
                ]
            },
            event: {
                contextmenu: (arg) => {
                    return {
                        html: [
                            { html: 'test' },
                        ]
                    }
                }
            }
        }
    }
}