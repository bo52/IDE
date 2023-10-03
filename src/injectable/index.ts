import { Menu_2206161052, IFm_abs, Fm_abs, TYPES, Контейнер, ITEG_Custom, Fm_body } from "@src/index"
class Index {
    Метод() {
        const body = Контейнер.get<Fm_body>(TYPES.Fm_body)
        const menu = Контейнер.get<Menu_2206161052>(TYPES.IMenu_2206161052)
        //const экз = Контейнер.get<Fm_abs>(TYPES.IFm_abs)
        body.TEG_jquery()
        menu.TEG_jquery()
    }
}

const Сервис = new Index()
Сервис.Метод()
export { Сервис }