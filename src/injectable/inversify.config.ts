import {
    TYPES, Container,
    ITeg_min, ITeg_obj, ITeg_show, Teg_min, Teg_obj, Teg_show,
    IMenu_2206161052, Menu_2206161052,
    ITEG_Custom, TEG_Custom,
    Fm_body, Fm_abs, IFm_abs,
} from "@src/index"
const Контейнер = new Container()
//мы складываем класс Custom под меткой TYPES.ITEG_Custom реализующий интерфейс ITEG_Custom
Контейнер.bind<ITeg_min>(TYPES.ITEG_Custom).to(Teg_min)
Контейнер.bind<ITeg_obj>(TYPES.ITEG_Custom).to(Teg_obj)
Контейнер.bind<ITeg_show>(TYPES.ITEG_Custom).to(Teg_show)
Контейнер.bind<ITEG_Custom>(TYPES.ITEG_Custom).to(TEG_Custom)
Контейнер.bind<IFm_abs>(TYPES.IFm_abs).to(Fm_abs)
Контейнер.bind<IMenu_2206161052>(TYPES.IMenu_2206161052).to(Menu_2206161052)
Контейнер.bind<Fm_body>(TYPES.Fm_body).to(Fm_body)

export { Контейнер }