'use strict';

$('.form_btn').on('click', function (e) {
    e.preventDefault();
    let txt = $("input:text").val();
    let lastDiv = $('div.comments-item').last();
    if (txt !== '') {
        $(lastDiv).clone(true, true)
            .addClass('newComment')
            .appendTo('.comments_wrapper')
            .children('.comment__text').text(txt);
    } else {
        alert('Сообщение не может быть пустым!');
    }
});

$(document).keydown(function (e) {

    let txt = $("input:text").val();
    let lastDiv = $('div.comments-item').last();

    if ((e.ctrlKey || e.metaKey) && (e.keyCode == 13 || e.keyCode == 10)) {
        $(lastDiv).clone(true, true)
            .addClass('newComment')
            .appendTo('.comments_wrapper')
            .children('.comment__text').text(txt);
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuJCgnLmZvcm1fYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0eHQgPSAkKFwiaW5wdXQ6dGV4dFwiKS52YWwoKTtcclxuICAgIGxldCBsYXN0RGl2ID0gJCgnZGl2LmNvbW1lbnRzLWl0ZW0nKS5sYXN0KCk7XHJcbiAgICBpZiAodHh0ICE9PSAnJykge1xyXG4gICAgICAgICQobGFzdERpdikuY2xvbmUodHJ1ZSwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCduZXdDb21tZW50JylcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCcuY29tbWVudHNfd3JhcHBlcicpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLmNvbW1lbnRfX3RleHQnKS50ZXh0KHR4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCfQodC+0L7QsdGJ0LXQvdC40LUg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvCEnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5rZXlkb3duKGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgbGV0IHR4dCA9ICQoXCJpbnB1dDp0ZXh0XCIpLnZhbCgpO1xyXG4gICAgbGV0IGxhc3REaXYgPSAkKCdkaXYuY29tbWVudHMtaXRlbScpLmxhc3QoKTtcclxuXHJcbiAgICBpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICYmIChlLmtleUNvZGUgPT0gMTMgfHwgZS5rZXlDb2RlID09IDEwKSkge1xyXG4gICAgICAgICQobGFzdERpdikuY2xvbmUodHJ1ZSwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCduZXdDb21tZW50JylcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCcuY29tbWVudHNfd3JhcHBlcicpXHJcbiAgICAgICAgICAgIC5jaGlsZHJlbignLmNvbW1lbnRfX3RleHQnKS50ZXh0KHR4dCk7XHJcbiAgICB9XHJcbn0pOyJdLCJmaWxlIjoiYXBwLmpzIn0=
