import { Menu_2206161052, IFm_abs, Fm_abs, TYPES, Контейнер, ITEG_Custom, Fm_body, Fm_ts_23100031227 } from "@src/index"
class Index {
    Метод() {
        Menu_2206161052.Instance = Контейнер.get<Menu_2206161052>(TYPES.Menu)
        Menu_2206161052.Instance.TEG_jquery()
        //const fm_ts = Контейнер.get<Fm_ts_23100031227>(TYPES.Fm_ts)
        const body = Контейнер.get<Fm_body>(TYPES.Fm)
        //const экз = Контейнер.get<Fm_abs>(TYPES.IFm_abs)
        body.TEG_jquery()
    }
}

const Сервис = new Index()
Сервис.Метод()
export { Сервис }