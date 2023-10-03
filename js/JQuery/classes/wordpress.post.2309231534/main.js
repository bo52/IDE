$(`strike`).each(function (i, elem) {
    elem = $(elem)
    id = elem.text().replace(/\D/g, '')
    let row = wpfun('wp/post/get/post.get.2303031311', id)
    row = JSON.parse(row);
    $('<div>' + row.content + '</div>').insertAfter(elem)
    elem.remove()
})