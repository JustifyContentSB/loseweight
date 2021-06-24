var processSwiper = new Swiper(".process__swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next-process",
        prevEl: ".swiper-button-prev-process",
    },
});

var reviewsSwiperMob = new Swiper(".reviews__list-mob", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next-reviews-mob",
        prevEl: ".swiper-button-prev-reviews-mob",
    },
});

var reviewsSwiperDesktop = new Swiper(".reviews__list-desktop", {
    slidesPerView: "auto",
    spaceBetween: 50,
    navigation: {
        nextEl: ".swiper-button-next-reviews-desktop",
        prevEl: ".swiper-button-prev-reviews-desktop",
    },
});

$("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});


var time = 60 * 60 * 6;

function tick() {

    let hours = document.querySelectorAll('.hours');
    for (let i = 0; i < hours.length; i++) {
        hours[i].innerHTML = Math.floor(time / 3600 % 24);
    }

    let mins = document.querySelectorAll('.mins');
    for (let i = 0; i < mins.length; i++) {
        mins[i].innerHTML = Math.floor(time / 60 % 60);
    }

    let secs = document.querySelectorAll('.secs');
    for (let i = 0; i < secs.length; i++) {
        secs[i].innerHTML = Math.floor(time % 60);
    }
    time--;
}

function start_timer() {

    intr = setInterval(tick, 1000);

}

start_timer();

$('.header__burger').on('click', function(e) {
    e.preventDefault();
    $('.header__nav').toggleClass('active');
})