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