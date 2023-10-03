//addEvent
//Функция для добавления обработчиков событий
function fun2201231017(object, event, handler, useCapture = undefined) {
    // Закрываем контекстное при клике левой или правой кнопкой по документу
    if (object.addEventListener) {
        object.addEventListener(event, handler, useCapture ? useCapture : false);
    }
    else if (object.attachEvent) {
        object.attachEvent('on' + event, handler);
    }
    else
        alert("Add handler is not supported");
}
