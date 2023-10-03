/**
 * 2208291158
 * obj.MergeRecursive 
 * СоединитьСвойстваОбъектов
 * соединить свойства объектов
 * @export
 * @param {*} obj1
 * @param {*} obj2
 * @param {boolean} [is_funs=false]
 * @return {*} 
 */
export function СоединитьСвойстваОбъектов(obj1, obj2, is_funs = false) {

  for (var p in obj2) {
    try {
      //event
      if (is_funs == false)
        is_funs = p == 'event'
      // Property in destination object set; update its value.
      if (obj2[p].constructor == Object) {
        obj1[p] = СоединитьСвойстваОбъектов(obj1[p], obj2[p], is_funs);

      } else {
        //свойство является массивом
        if (Array.isArray(obj1[p])) {
          if (is_funs || p == 'classes') { obj1[p] = obj1[p].concat(obj2[p]); } else {
            Object.keys(obj1[p]).forEach(function (key) {
              obj1[p][key] = СоединитьСвойстваОбъектов(obj1[p][key], obj2[p][key], is_funs)
            })
            if (obj1[p].length < obj2[p].length) {
              for (var i = obj1[p].length; i < obj2[p].length; i++) {
                obj1[p].push(obj2[p][i])
              }
            }
          }
        } else {
          //изменить свойство
          if (typeof (obj1[p]) == 'string' && p == 'classes') {
            obj1[p] = [obj1[p], obj2[p]]
          } else
            obj1[p] = obj2[p]
        }

      }
    } catch (e) {
      // свойство не задано, установите значение
      obj1[p] = obj2[p];
    }
  }

  return obj1;
}