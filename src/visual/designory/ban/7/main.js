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
        speed: 354000,
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

    tl.set('body', {opacity: 1});
    // tl.to('.frame0', {duration: 0.1, opacity:1, ease: 'power1.out'}, 'body');

    tl.addLabel('firstFrame', '+=2.75'); //+2.75
    tl.to('.frame0', {duration: 0.6, opacity:0, ease: 'power1.out'}, 'firstFrame');
    tl.from('#ssi', {duration: 0.6, opacity:0, delay:0.3, ease: 'power1.out'}, 'firstFrame');
    tl.to('#clickTag', {duration: 0.1, height:135, ease:'power2.out'}, 'firstFrame');
    tl.to('.textind, .welireg, .bg_blue', {duration: 0.6, opacity:1, delay:0.3, ease: 'power1.out'}, 'firstFrame');


    tl.addLabel('secondFrame', '+=7.6'); // 8.5 sec ----- +7.6
    tl.to('.textind, .welireg, .bg_blue', {duration: 0.5, opacity:0, ease: 'power1.out'}, 'secondFrame');
    tl.to('.man', {duration: 0.5, opacity:1, ease: 'power1.out'}, 'secondFrame');
    tl.to('.man', {delay:0.25,duration: 2, scale: .37, x:-280, y: -96, ease: 'power2.out'}, 'secondFrame');
    tl.to('.text1', {delay: 0.8, duration: 0.5, opacity: 1, ease: 'power1.out'}, 'secondFrame');
    tl.to('.text2', {delay:1.2, duration: .5, opacity: 1, ease: 'power1.out'}, 'secondFrame');

    // tl.addLabel('thirdFrame', '-=1.75'); //-1.75 sec

    

    tl.addLabel('last', '+=2.5'); //+2.5
    tl.to('.man, .text1, .text2', {duration: .5, opacity: 0, ease: 'power1.out'}, 'last');
    tl.to('.end, .merck, .welireg_last', {delay:0.5, duration: .5, opacity: 1, ease: 'power1.out'}, 'last');

    tl.to('.cta', {delay:0.5,duration: 0.5, x: 149, ease: 'power1.out', onComplete: endAnimation}, 'last');


    //tl.add(endAnimation, "+=0.1"); 
    //End animation

    //tl.to('.logo-2', {duration: 1, x: -87, ease: 'linear', onComplete: endAnimation}, 'entryBtn');
    

    //neither modify
    function endAnimation(){

        startAutoPlay();
    }

}());