import { teg, injectable, Teg_obj } from "@src/index"
export interface ITeg_body {
    Change(struct: any)
    TEG_body(struct: any): {}
}

@injectable()
export class Teg_body extends Teg_obj {
    Change(struct: any) {
        this.Teg.empty()
        let M = this.TEG_body(struct)
        M['body'] = this.Teg
        teg(M)
    }
    TEG_body(struct: any): {} {
        return {}
    }
}