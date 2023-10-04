import {
    TYPES, Container,
    IMenu_2206161052, Menu_2206161052,
    ITEG_Custom, TEG_Custom, Teg_min, Teg_obj, Teg_show,
    Btns_inline,
    ToolTip_2304211344,
    IFm_ts_23100031227, Fm_ts_23100031227, Fm_body, Fm_abs, IFm_abs,
} from "@src/index"
const Контейнер = new Container()
//мы складываем класс Custom под меткой TYPES.ITEG_Custom реализующий интерфейс ITEG_Custom
Контейнер.bind<ITEG_Custom>(TYPES.ITEG_Custom).to(TEG_Custom)
Контейнер.bind<IMenu_2206161052>(TYPES.Menu).to(Menu_2206161052)
Контейнер.bind<ToolTip_2304211344>(TYPES.IToolTip).to(ToolTip_2304211344)
//ФОРМЫ
Контейнер.bind<IFm_abs>(TYPES.IFm_abs).to(Fm_abs)
Контейнер.bind<Fm_body>(TYPES.Fm).to(Fm_body)
Контейнер.bind<Fm_ts_23100031227>(TYPES.Fm_ts).to(Fm_ts_23100031227)
//КНОПКИ
Контейнер.bind<Btns_inline>(TYPES.Btns).to(Btns_inline)
export { Контейнер }