$('.screen').click(() => {
    $('.widget').removeClass('add-widget');
    $('.start').removeClass('add-start');
    $('.search-bar').removeClass('add-search-bar');

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
    $('.search-bar').removeClass('add-search-bar');

}).click(() => {
    $('.widget').toggleClass('add-widget');
    $('.start').removeClass('add-start');
    $('.search-bar').removeClass('add-search-bar');
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
        $('.search-bar').removeClass('add-search-bar');
    }
});
// Toggle Start Menu
$('.window').click(() => {
    $('.start').toggleClass('add-start');
    $('.search-bar').removeClass('add-search-bar');
    $('.widget').removeClass('add-widget');

})
$(window).keyup((e) => {
    if (e.keyCode === 18) {
        e.preventDefault();
        $('.start').toggleClass('add-start');
        $('.widget').removeClass('add-widget');
        $('.search-bar').removeClass('add-search-bar');
    }
});

//search bar 
function leftScroll(container) {
    $('.' + container).animate({ scrollLeft: "-=139px" }, "slow");
}
function rightScroll(container) {
    $('.' + container).animate({ scrollLeft: "+=139px" }, "slow");
}
$('.l-btn1').click(function () {
    leftScroll('Scroll')
});
$('.r-btn1').click(function () {
    rightScroll('Scroll')
});

$('.L-btn2').click(function () {
    leftScroll('Scroll2')
});
$('.R-btn2').click(function () {
    rightScroll('Scroll2')
});

$('.search').click(function () {
    $('.search-bar').toggleClass('add-search-bar');
    $('.start').removeClass('add-start');
    $('.widget').removeClass('add-widget');
});
$('.input').click(function (e) {
    e.preventDefault();
    $('.search-bar').addClass('add-search-bar');
    $('.start').removeClass('add-start');
});
$(window).keydown((e) => {
    if (e.key === 's') {/* && e.altKey) { /* w = 87*/
        e.preventDefault();
        $('.search-bar').toggleClass('add-search-bar');
        $('.start').removeClass('add-start');
        $('.widget').removeClass('add-widget');
    }
});