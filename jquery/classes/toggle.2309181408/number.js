var tegs = []
var html = []
function fun_text(item, text) {
    if (text.replace(/ |\n/g, '').length != 0) {
        let b = false
        //цифры
        text = text.replace(/".*?"|>|<|№|%|`|~|_|,|{|}|[-+*()^&$#@!?'./|]|:|=|;|\d/g, (match, offset, str) => {
            b = true
            let color = '0123456789'.indexOf(match) == -1 ? ((match[0] == '"' && match[match.length - 1] == '"') ? 'green' : 'red') : 'blue'
            return '<span style="color:' + color + '" class="number">' + match + '</span>'
        })
        if (b) {
            tegs.push($(item))
            html.push(text)
        }
    }
}

function fun_children(item) {
    let children = item.children(':not(script,style)')
    if (children.length == 0) {
        fun_text(item, item[0].innerText)
        return
    }
    item[0].childNodes.forEach(node => {
        if (node.nodeName == '#text') {

            fun_text($(node), node.nodeValue)
        } else
            fun_children($(node))
    })
}

function fun2309191051() {
    fun_children($('.post'))
    let cnt = 0
    tegs.forEach(item => {
        if (item[0].nodeName == '#text') {
            $('<div style="display:inline-block">' + html[cnt] + '</div>').insertAfter(item)
            $(item).remove()
        } else {
            //children0
            item[0].innerText = ''
            $('<div style="display:inline-block">' + html[cnt] + '</div>').prependTo(item)
        }
        cnt++
    })
}
fun2309191051()
//let html = body.html().replace(/[0-9]/g, (match, offset, str) => {
//    return '<span style="color:blue" class="number">' + str + '</span>'
//})
//body.html(html)