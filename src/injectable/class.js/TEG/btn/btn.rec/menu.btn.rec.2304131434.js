//menu.btn.rec
function fun2304131434(ARGS) {
    let CSS = { btn: 2304121418 };
    let FUNS = { rec: fun2304131434 };
    if (ARGS == undefined)
        return {};
    return {
        html: Array.from(ARGS, (item) => {
            return { html: [item.name, FUNS.rec(item.data)], CSS: CSS.btn, event: { click: item.click } };
        })
    };
}
