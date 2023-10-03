/**2208290901
 * teg.data.create
 * ДобавитьВТегДанные
 * добавить в тег данные
 * @export
 * @param {*} p
 * @return {*} 
 */
export function ДобавитьВТегДанные(p) {
	if (p.data == undefined) return '';
	let data = '';
	// @ts-ignore
	let data_vars = Object.assign({}, p.data);
	Object.keys(data_vars).forEach(function (key) {
		//это не объект
		if (typeof (data_vars[key]) != 'object') {
			data += ' data-' + key + '="' + data_vars[key] + '"';
			delete p.data[key];
		}
		//p.ex.data(key,p.data[key]);
	}, data_vars);
	return data;
}