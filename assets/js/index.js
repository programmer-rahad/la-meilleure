document.addEventListener('DOMContentLoaded', function () {


    // Set Slider Background Image
    let slideItems = [...document.querySelectorAll('.custom--fade--slider .slider__item')];
    for (let i = 0; i < slideItems.length; i++) {
        const src = slideItems[i].querySelector('.slider__item__content > img').src;
        slideItems[i].style.backgroundImage = `url(${src})`;
    }

    // Accordion
    {
        var accordionItems = document.querySelectorAll('.accordion--item');
        var titles = document.querySelectorAll('.accordion__title');

        if (accordionItems.length) {
            function slideUp(el) {
                el.classList.remove('active');
                el.children[1].style.height = 0;
            }
            function slideDown(el) {
                el.classList.add('active');
                el.children[1].style.height = el.children[1].children[0].offsetHeight + 'px';
            }
            slideDown(accordionItems[0]);
            for (let i = 0; i < titles.length; i++) {
                titles[i].addEventListener('click', function () {
                    const item = this.parentElement;
                    if (item.classList.contains('active')) {
                        slideUp(item);
                        return;
                    } else {
                        for (let i = 0; i < accordionItems.length; i++) {
                            slideUp(accordionItems[i]);
                        }
                        slideDown(this.parentElement);
                    }
                })
            }
        }
    }
    {
        // Content One Mobile Slider
        var sliderItems = document.querySelectorAll('.content-one article');
        var mobileSliderWrapper = document.querySelector('.mobile-slider');
        sliderItems.forEach(function (item) {
            mobileSliderWrapper.append(item.cloneNode(true));
        });
    }

    // Header Bg Change for mobile 
    {
        var button = document.querySelector('.navbar-toggler');
        button.addEventListener('click', function () {
            document.querySelector('header').classList.toggle('active');
        })
    }
    // Mobile Content Toggle
    {
        var buttons = document.querySelectorAll('.black-content .bcb-item > div > a');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (e) {
                e.preventDefault();
                console.log('Hello');
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('active');
            });
        }
    }


});

// jQuery
$(document).ready(function () {
    $('.mobile-slider').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<img src="assets/images/icons/black-arrow-left.svg" />', '<img src="assets/images/icons/black-arrow-right.svg" />'],
        dots: false,
        loop: true,
        autoplay: true
    });
    $('.bcb-buttons-slider').owlCarousel({
        items: 1,
        // nav: true,
        // navText: ['<img src="assets/images/icons/black-arrow-left.svg" />','<img src="assets/images/icons/black-arrow-right.svg" />'],
        // dots: false,
        loop: true,
        autoplay: false,
        responsive: {
            0: {
                stagePadding: 50,
            },
            350: {
                stagePadding: 65
            },
            400: {
                stagePadding: 80
            },
            450: {
                stagePadding: 110
            }
        }
    });

    $('.slider__items').slick({
        dots: true,
        arrows: false
    });

});
// $(document).ready(function(){
//     $(".mobile-slider").owlCarousel();
//   });