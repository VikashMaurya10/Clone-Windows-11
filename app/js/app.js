$(document).ready(function () {
    
    alert('Use alt key as window key')
});
$('body').click(() => {
    $('.widget').removeClass('add-widget');
});

setInterval(() => {
    const date = new Date();
    $('.time').text(date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    }))
    $('.date').text(date.toLocaleDateString({
        year: 'numeric', month: 'long'
    }))
}, 999);

//toggle weather widget
$('.weather').mouseover(() => {
    $('.widget').addClass('add-widget');
}).click(() => {
    $('.widget').toggleClass('add-widget');
}).mouseleave(() => {
    $('.widget').removeClass('add-widget');
});

$('.widget').mouseover(() => {
    $('.widget').addClass('add-widget');
}).mouseleave(() => {
    $('.widget').removeClass('add-widget');
})

$(window).keydown((e) => {
    if (e.key == 'w' && e.altKey) {   /*87*/
        $('.widget').toggleClass('add-widget');
    }
});