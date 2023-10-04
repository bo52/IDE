import 'jquery-ui-bundle'
import "reflect-metadata"
//id
import { РандомныйЦвет } from '@fun/id/id.color.2209121430'
export { РандомныйЦвет }
import { УникНомерПоДате } from '@fun/id/id.date.2301121306'
export { УникНомерПоДате }
import { УникНомер } from '@fun/id/id.random.2206100917'
export { УникНомер }
//CLASS
import { CLASS, jClass } from '@fun/jclass.2309011717'
export { CLASS, jClass }
//obj
import { СоединитьСвойстваОбъектов } from '@fun/obj/obj.MergeRecursive.2208291158'
export { СоединитьСвойстваОбъектов }
import bo52 from '@src/LIB/comp/bo52/global.2303231240'
export { bo52 }
import { jfun_ev } from '@funs/jfun.ev.2309012013'
export { jfun_ev }
import { ToolTip_i } from "@src/WordPress/ToolTip/ToolTip_i"
import { ToolTip_info } from "@src/WordPress/ToolTip/ToolTip_info"
//TEG
import teg from "@TEG/teg.complex.2309021513"
import { Teg } from "@TEG/teg.class.2309021512"
import { ДобавитьСобытиеОбъекту } from "@TEG/event/teg.attr.event.add.2208290938"
//РЕКУРСИЯ
import { РекурсияКнопок } from '@src/LIB/class.js/TEG/btn/btn.rec/teg'
export { teg, Teg, ДобавитьСобытиеОбъекту, РекурсияКнопок }
//mouse
import { КоординатыМыши } from '@src/LIB/comp/class/mouse/mousemove.2308311516'
import { ПоказатьЭлементМышью } from '@src/LIB/funs/mouse/teg.show.mouse.2304071349'
export { КоординатыМыши, ПоказатьЭлементМышью }
//построение паттернов
//TYPES
import { TYPES } from "@src/injectable/types"
import { injectable, inject, Container } from "inversify"
import { types } from "util"
export { TYPES, injectable, inject, Container, types }
//КЛАССЫ
//ITEG_Custom
import { ITEG_Custom, TEG_Custom } from '@teg/custom/teg'
export { ITEG_Custom, TEG_Custom }
//Teg_min
import { ITeg_min, Teg_min } from '@teg/LIB/teg.min/teg.min'
import { ITeg_obj, Teg_obj } from '@teg/LIB/teg.min/teg.obj'
import { ITeg_show, Teg_show } from '@teg/LIB/teg.min/teg.show'
import { ITeg_body, Teg_body } from '@teg/LIB/teg.min/teg.body'
export { ITeg_min, Teg_min, ITeg_obj, Teg_obj, ITeg_body, Teg_body, ITeg_show, Teg_show }
//Teg_show
import { ToolTip_2304211344 } from '@src/injectable/class.js/TEG/ToolTip/teg'
//menu
import { IMenu_2206161052, Menu_2206161052 } from "@teg/LIB/MENU/menu.2206161052/teg"
export { ToolTip_2304211344, IMenu_2206161052, Menu_2206161052 }
//КНОПКИ
import { Btns_inline } from '@teg/btn/btns.inline/teg'
import { Btn_close_min_close, Btn_close_min } from '@teg/btn/btn.close/teg'
export { Btns_inline, Btn_close_min, Btn_close_min_close }
//ФОРМЫ
import { IFm_abs, Fm_abs } from '@teg/FORM/fm.abs.2304131351/teg'
import { IFm_ts_23100031227, Fm_ts_23100031227 } from '@src/injectable/project.js/fm.tables.2310031227/teg'
export { IFm_ts_23100031227, Fm_ts_23100031227 }
import { IFm_body, Fm_body } from '@src/injectable/project.js/fm.body/teg'
export { IFm_body, Fm_body, IFm_abs, Fm_abs }
//КОНТЕЙНЕРЫ
import { Контейнер } from "@src/injectable/inversify.config"
export { Контейнер }
//ВЫПОЛНЕНИЕ ПАТТЕРНОВ
//import '@src/injectable/index'
import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client';
// Create a root.
const root = createRoot(document.getElementById('root'))
root.render(<App />)
