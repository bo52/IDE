class replace_btn_class2309161719 extends replace_class2309161713 {
    static back_fun(match, offset, string) {
        let id = super.back_fun(match, offset, string)
        return this.teg_link(id);
    }
    static teg_link(id) {
        let t = this.teg(id);
        //t = bo52.Teg(t).data;
        let html = t[0].innerHTML;
        //$(t).remove();
        return html;
    }

    static teg(id) {
        let href = 'https://codegid.ru/?p=' + id
        //получить титл поста в php wordpress
        let title = ''
        //let title = wpfun(2303021816, id)
        //получить имя и ссылка поста
        return {
            css: { margin_bottom: '2px' },
            html: {
                teg: 'a',
                attr: { target: '_blank', href: href },
                css: { text_decoration: 'none', margin_left: '2px' },
                classes: 'posts-root',
                data: { id: id },
                html: title
            }
        }
    }
}