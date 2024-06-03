var swiper = new Swiper(".main-banner .swiper-container", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 1000,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	pagination: {
        el: ".main-banner .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

var swiper2 = new Swiper(".itemSwiper2 .swiper-container", {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	navigation: {
		nextEl: ".itemSwiper2 .swiper-button-next",
        prevEl: ".itemSwiper2 .swiper-button-prev",
    },		
});