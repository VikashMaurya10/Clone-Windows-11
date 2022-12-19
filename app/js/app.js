$('.screen').click(() => {
    $('.widget').removeClass('add-widget');
});
// prevent Tab key event
// $(window).keydown((e) => {
//     if (e.key === 'Tab') {
//         e.preventDefault()
//     }
// });
// Generate Random background
$(window).ready(() => {
    const num = Math.ceil(Math.random() * 14);
    randImage = "../app/images/wallpaper/" + num + ".jpg";
    $("main").css('background-image', "url(" + randImage + ")");
});

// Time && Date
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

// toggle weather widget
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
    if (e.key === 'w' && e.altKey) { /* w = 87*/
        $('.widget').toggleClass('add-widget');
    }
});

$('.window').click(() => {
    $('.start').toggleClass('add-start');

})
$(window).keydown((e) => {
    if (e.altKey === true) {
        $('.start').toggleClass('add-start');
    }
});