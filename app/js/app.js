$('.screen').click(() => {
    $('.widget').removeClass('add-widget');
    $('.start').removeClass('add-start');
});
// prevent Tab key event
$(window).keydown((e) => {
    if (e.key === 'Tab') {
        e.preventDefault()
    }
});
// Generate Random background
$(window).ready(() => {
    const num = Math.ceil(Math.random() * 14);
    randImage = "./app/images/wallpaper/" + num + ".jpg";
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
    $('.Date').text(date.toLocaleDateString("en-GB", {
        month: 'long', day: 'numeric'
    }))

}, 999);

// toggle weather widget
$('.weather').mouseover(() => {
    $('.widget').addClass('add-widget');
    $('.start').removeClass('add-start');
}).click(() => {
    $('.widget').toggleClass('add-widget');
    $('.start').removeClass('add-start');
}).mouseleave(() => {
    $('.widget').removeClass('add-widget');

});
$('.widget').mouseover(() => {
    $('.widget').addClass('add-widget');
}).mouseleave(() => {
    $('.widget').removeClass('add-widget');
})
$(window).keydown((e) => {
    if (e.key === 'w') {/* && e.altKey) { /* w = 87*/
        e.preventDefault();
        $('.widget').toggleClass('add-widget');
        $('.start').removeClass('add-start');
    }
});
// Toggle Start Menu
$('.window').click(() => {
    $('.start').toggleClass('add-start');

})
$(window).keyup((e) => {
    if (e.keyCode === 18) {
        e.preventDefault();
        $('.start').toggleClass('add-start');
        $('.widget').removeClass('add-widget');
    }
});