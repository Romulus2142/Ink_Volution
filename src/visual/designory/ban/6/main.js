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
        speed: 254000,
        touchReleaseOnEdges: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 12,
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
    
    tl.to('.primerFrame', {duration: 0.7, left:0, ease: 'power2.out'});
    

    tl.addLabel('frame2', '+=2.5'); // 3 seconds
    
    tl.to('.primerFrame', {duration: 0.3, opacity:0, ease: 'circ.in'}, 'frame2');
    tl.to('.icon-med', {duration: 0.5, opacity:1, ease: 'power2.out'}, '+=0.2'); 
    tl.to('.icon-pac', {duration: 0.5, opacity:1, ease: 'power2.out'}, '+=0.2'); 
    tl.to('.tx_1', {delay: 1.2, duration: 0.5, opacity:1, ease: 'power2.out'}, 'frame2' );

    tl.addLabel('frame3', '+=5'); // 5 seconds
    tl.to('.tx_1', {duration: 0.5, opacity:0, ease: 'power2.out'}, 'frame3' );
    tl.to('.icon-pac', {duration: 0.5, opacity:0, ease: 'power2.out'}, 'frame3' );
    tl.to('.icon-med', {duration: 0.5, opacity:0, ease: 'power2.out'}, 'frame3' );
    tl.to('.tx_2', {duration: 0.5, opacity:1, ease: 'power2.out'}, '+=0'); 
    tl.to('.icon-im, .icon-iud', {duration: 0.5, opacity:1, ease: 'power2.out'}, '+=0');

    tl.addLabel('frame4', '+=3'); // 3 seconds
    tl.to('.tercerFrame', {duration: 0.4, opacity:0, ease: 'power2.out'}, 'frame4' );
    tl.to('.cuartoFrame', {delay:0.5, duration: 0.7, opacity:1, ease: 'power2.out'}, 'frame4' );

    tl.add(endAnimation, "+=1");
    
    //End animation

    

    //neither modify
    function endAnimation(){
        //btnCTA.addEventListener('click', onClickCta);
        //btnCTA.style.zIndex = 802;

        startAutoPlay();
    }
    

}());