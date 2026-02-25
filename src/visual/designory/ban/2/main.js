// 327 lines
// 654s
(function(){

    //do not modify from here
    // SCROLL FUNCTIONS
    var titleBreakPoints = [{
        point: -1788,
        dy: -18,
    }];
    var autoMoveTimeId = null;
    var isInteraction = false;
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    var scrollbar = document.querySelector('.swiper-scrollbar');
    var swiperContainer = document.querySelector('.swiper-container');
    var topBtn = document.querySelector('.top-button');
    var bottomBtn = document.querySelector('.bottom-button');
    var swiperSlideImg = document.querySelector('.swiper-slide img');
    var swiper = null;
    
    swiperSlideImg.onload = function() {
        if (swiper) {
            swiper.update()
        }
    }

    swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        autoplay: {
            delay: 500,
        },
        freeMode: true,
        freeModeMomentumRatio: .5, 
        //Update scrolling time
        speed: 654000,
        touchReleaseOnEdges: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 6,
            draggable: true,
            snapOnRelease: false,
        },
        on: {
            init: function() {},
            scroll: function(evt) {
                isInteraction = true;
                autoMoveLocked = true;
            },
            scrollbarDragStart: function() {
                isInteraction = true;
                autoMoveLocked = true;
            },

            touchMove: function() {
                isInteraction = true;
                autoMoveLocked = true;
            },
            progress: function(evt) {}
        },
        mousewheel: true,
    });

    function startAutoPlay() {
        swiper.update();
        swiper.autoplay.start();
    }


    function moveUp() {
        swiper.update();
        var translate = swiper.translate - 1;
        if (translate < -swiper.snapGrid[1]) {
            translate = -swiper.snapGrid[1];
        }
        swiper.setTranslate(translate)
        if (!isInteraction) autoMoveLocked = false;
    }
    var positionY = 0
    var testTimeId = null;
    var titleBox = document.querySelector('.title-box');
    var autoMoveLocked = true;

    function observedSwiper() {
        const rect = swiperWrapper.getBoundingClientRect();
        const parentRect = swiperContainer.getBoundingClientRect();

        if (!autoMoveLocked && swiper) {
            positionY -= 0.1
            if (positionY < -swiper.snapGrid[1]) {
                positionY = -swiper.snapGrid[1];
            }
            swiper.setTranslate(positionY);
        }
        for (var i = 0; i < titleBreakPoints.length; i += 1) {
            var translate = (rect.y || rect.top) - (parentRect.y || parentRect.top);
            if (translate <= titleBreakPoints[i].point) {
                var dy = (translate - titleBreakPoints[i].point)
                if (dy < titleBreakPoints[i].dy) dy = titleBreakPoints[i].dy;

                titleBox.style.transform = 'translate3d(0, ' + (dy + 'px') + ',0)';
            } else {
                titleBox.style.transform = 'translate3d(0, 0, 0)';
            }
        }
        testTimeId = window.requestAnimationFrame(observedSwiper);
    }
    observedSwiper();
    animInitCallback();


    function animInitCallback() {
        swiperContainer.classList.add('active');
        scrollbar.classList.add('active');
    }


    topBtn.addEventListener('click', function() {
        swiper.autoplay.stop();

        swiperWrapper.classList.remove('autoplay');
        var currentY = swiper.getTranslate();
        var endY = currentY + 50 >= 0 ? 0 : currentY + 50;
        swiper.setTransition(200);
        swiper.setTranslate(endY);
        isInteraction = true;
        autoMoveLocked = true;
        return false;
    });
    bottomBtn.addEventListener('click', function() {
        swiper.autoplay.stop();

        swiperWrapper.classList.remove('autoplay');
        var currentY = swiper.getTranslate();
        var endY = currentY - 50 <= -swiper.snapGrid[1] ? -swiper.snapGrid[1] : currentY - 50;
        swiper.setTransition(200);
        swiper.setTranslate(endY);
        isInteraction = true;
        autoMoveLocked = true;
        return false;
    });

    swiper.autoplay.stop();
    
    swiper.on('transitionEnd', function(){
        swiper.autoplay.stop();
        setTimeout(function(){ swiper.slideTo(0, 1, false); }, 5000);
    });

    //from here you can modify

    //Animation
    var tl = gsap.timeline();

    tl.from('.tx-1 img', {opacity:0, duration: 0.8, ease: 'power1.out'});
    tl.from('.patient img ', {opacity:0, x:200, duration: 0.8, ease: 'power1.out'}, '-=0.8');

    tl.addLabel('firstFrame', '+=2.2'); //3 sec 2.2

    tl.to('.green, .tx-1 img', {duration: 0.5, opacity:0, ease: 'power3.out'}, 'firstFrame');
    tl.to('.patient img', {delay: 0.2, duration: 0.7, x:200, ease: 'power2.out'}, 'firstFrame');
    tl.from('.tx-2 img', {delay: 0.5, duration: 0.7, x:-70, opacity:0, ease: 'power2.out'}, 'firstFrame');

    tl.addLabel('secondFrame', '+=3'); //4 sec 3

    tl.to('.tx-2 img', {duration: 0.5, opacity:0, ease: 'power3.out'}, 'secondFrame');
    tl.from('.quote img', {duration: 0.8, opacity:0, x:-70, ease: 'power3.out'}, 'secondFrame');
    tl.from('.tx-3 img', {delay: 0.3, duration: 0.8, opacity:0, x:-70, ease: 'power3.out'}, 'secondFrame');

    tl.addLabel('fourthFrame', '+=2.2'); //3 sec 2.2

    tl.to('.tx-3 img, .quote img', {duration: 0.5, opacity:0, ease: 'power3.out'}, 'fourthFrame');
    tl.from('.quote_2 img', {duration: 0.8, opacity:0, x:-70, ease: 'power3.out'}, 'fourthFrame');
    tl.from('.tx-5 img', {delay: 0.3, duration: 0.8, opacity:0, x:-70, ease: 'power3.out'}, 'fourthFrame');

    tl.addLabel('fifthFrame', '+=2.2'); //3 sec 2.2

    tl.to('.tx-5 img, .quote_2 img, .patient img', {duration: 0.5, opacity:0, ease: 'power3.out'}, 'fifthFrame');
    tl.to('.keytruda img, .indication img', {delay: 0.1, duration: 1, opacity:1, ease: 'power3.out'}, 'fifthFrame');
    //Timer
    tl.to('.circle_all, .imagesFrame', {duration: 0.5, opacity:1, ease: 'power3.out'}, 'fifthFrame');
    tl.to('.circle_mask', {duration: 9, rotate:330, transformOrigin:'100% 50%', delay:1.2, ease: 'power0.out' }, 'fifthFrame');
    tl.to('.circle_tapa, .circle_half_02', {duration: 0.1, opacity:1, delay:6.2, ease: 'power4.out'}, 'fifthFrame');
    tl.to('.circle_half', {duration: 0.1, opacity:0, delay:6.2, ease: 'power4.out'}, 'fifthFrame');
    tl.to("#redBox", { duration: 9, backgroundPosition:"-748px 0px", delay:1.2, ease: "steps(9)", repeat:0}, 'fifthFrame');
    //End Timer

    tl.addLabel('sixthFrame', '-=0'); //10 sec

    tl.to('.circle_all, .imagesFrame, .indication img', {duration: 0.5, opacity:0, ease: 'power3.out'}, 'sixthFrame');
    tl.to('#clickTag', {height: 116, ease: 'power1.out'}, "sixthFrame");
    tl.to('.tx-6 img', {delay:0.5, duration: 0.5, opacity:1, ease: 'power3.out'}, 'sixthFrame');
    tl.from('#ssi', {delay:0.5, duration: 0.5, y: 136, ease: 'power1.out'}, "sixthFrame");
    tl.to('.cta img', {delay:0.5, duration: 1, opacity: 1, ease: 'power1.out'}, 'sixthFrame');
    tl.to('.cta img', {duration: 0.4, right: '0%', onComplete: endAnimation}, '-=0.1');
    
    //End animation

    

    //neither modify
    function endAnimation(){

        startAutoPlay();
    }

}());