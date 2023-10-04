import { IMenu_2206161052, Fm_ts_23100031227, TYPES, injectable, inject, Teg_obj } from "@src/index"
import './style.css'
export interface IFm_body {
}

@injectable()
export class Fm_body extends Teg_obj implements IFm_body {
    static Instance: Fm_body
    constructor(
        @inject(TYPES.Fm_ts) private fm_ts: Fm_ts_23100031227
    ) { super() }
    override fun_teg(ex: any): void {
        Fm_body.Instance = this
        super.fun_teg(ex)
    }

    override get TEG() {
        let OBJ = this
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
                contextmenu: () => [
                    {
                        name: 'таблица',
                        click: () => {
                            OBJ.fm_ts.show()
                        },
                        data: [
                            {
                                name: 'test',
                                click: () => { },
                            }
                        ]
                    }
                ]

            }
        }
    }
}