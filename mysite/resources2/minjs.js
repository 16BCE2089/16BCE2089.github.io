
$(document).ready(function() {

$('nav').css('background:','blue');
$('#left').children().css('float','left');
$('#right').children().css('float','right');

$('.imagecontain').children().mouseenter(function() {
    $(this).children().toggleClass('notshow');
});

$('.imagecontain').children().mouseleave(function() {
    $(this).children().toggleClass('notshow');
});

$('.ptopic').hover(function() {
     $(this).next().children().toggleClass('show');
});



});

