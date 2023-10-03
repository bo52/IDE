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
import teg from "@teg/teg.complex.2309021513"
import { Teg } from "@teg/teg.class.2309021512"
import { ДобавитьСобытиеОбъекту } from "@teg/event/teg.attr.event.add.2208290938"
export { teg, Teg, ДобавитьСобытиеОбъекту }
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
import { ITEG_Custom, TEG_Custom } from '@src/injectable/class.js/TEG/custom/teg'
export { ITEG_Custom, TEG_Custom }
//Teg_min
import { ITeg_min, Teg_min } from '@src/injectable/class.js/TEG/teg.min/teg.min.2304181703'
export { ITeg_min, Teg_min }
//Teg_obj
import { ITeg_obj, Teg_obj } from '@src/injectable/class.js/TEG/teg.min/teg.obj.2304091930'
export { ITeg_obj, Teg_obj }
//Teg_show
import { ITeg_show, Teg_show } from '@src/injectable/class.js/TEG/teg.min/teg.show.2303251754'
//menu
import { IMenu_2206161052, Menu_2206161052 } from "@src/injectable/class.js/TEG/MENU/menu.2206161052/teg"
export { ITeg_show, Teg_show, IMenu_2206161052, Menu_2206161052 }
//fm.abs
import { IFm_abs, Fm_abs } from '@src/injectable/class.js/TEG/FORM/fm.abs.2304131351/teg'
import { Fm_body } from '@src/injectable/class.js/TEG/FORM/fm.body/teg'
export { Fm_body, IFm_abs, Fm_abs }
//КОНТЕЙНЕРЫ
import { Контейнер } from "@src/injectable/inversify.config"
export { Контейнер }
//ВЫПОЛНЕНИЕ ПАТТЕРНОВ
import '@src/injectable/index'
