class replace_class2309161713 {
    static start = '[mypost'
    static stop = ' '
    static regex = /\[mypost.*?\]/i
    //
    static back_fun(match, offset, string) {
        //поиск начала цифры
        let id = match.substr(this.start.length)
        //вырезать после конца цифры
        id = id.substr(0, id.indexOf(this.stop))

        return id;
    }

    static replace() {
        //текущий скрипт
        let script = document.currentScript
        //перед скриптом тег
        let div = $(script.previousElementSibling)
        //содержимое тега
        let content = div.html()
        //замена содержимого по регулярному выражениию
        content = content.replace(this.regex, this.back_fun)
        //замена на обработанный контент в тег
        div.html(content)
    }
}