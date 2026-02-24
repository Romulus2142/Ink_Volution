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
        speed: 194000,  //314000
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
    tl.set('body', {opacity: 1});
    tl.to('.askFrame', {duration: 0.6, opacity:1, ease: 'power2.out'});
    tl.to('.selfFrame', {duration: 0.6, y:-168, ease: 'power2.out'}, '-=0.3');
    

    tl.addLabel('secondFrame', '+=2.4');
    tl.to('.selfFrame', {duration: 0.6, y:-336, ease: 'power2.out'}, 'secondFrame');
    tl.to('.logo_nex_all', {duration: 0.6, y:-188, ease: 'power2.out'});   
    
    
    tl.addLabel('thirdFrame', '+=2.4');
    tl.to('.askFrame', {duration: 0.6, opacity:0, ease: 'power4.out'}, 'thirdFrame');
    tl.to('#clickTag', {duration: 0.6, width: 642, ease: 'power4.out'}, 'thirdFrame');
    tl.to('.blueFrame', {duration: 0.6, top: 222, ease: 'power2.out'}, '-=0.2');
    tl.from('#ssi', {duration: 0.6, y: 250, opacity: 1, ease: 'power2.out'}, '-=0.6');
    tl.to('.logo_nex_all', {duration: 0.6, x:-308,  ease: 'power2.out'}, '-=0.6');
    

    tl.addLabel('fourthFrame', '+=3.6');
    tl.to('.blueFrame', {duration: 0.6, opacity:0,ease: 'power4.out'}, 'fourthFrame');
    tl.to('.logo_nex_all', {duration: 0.6, y:-212,  ease: 'power1.out'}, 'fourthFrame');
    tl.to('.logo_nex_all .logo_nex_two', {duration: 0.6, opacity:0,  ease: 'power1.out'}, 'fourthFrame');
    tl.to('.logo_nex_all .tapa', {duration: 0.6, opacity:1,  ease: 'power1.out'}, 'fourthFrame');
    tl.to('.overFrame', {duration: 0.8, x:-970, ease: 'power2.out'});
       
     //aqui voy


    tl.addLabel('last', '+=4');
    tl.to('.overFrame', {duration: 0.4, opacity:0, ease: 'power2.out'}, 'last');
    tl.to('.logo_nex_all', {duration: 0.6, y:-152,  ease: 'power2.out'}, 'last');

    tl.to('.doctor_copy', {duration: 0.6, x:-970,  ease: 'power1.out'}); 
    tl.to('#mainBtn', {duration: 0.6, x:-777,  ease: 'power1.out',  onComplete: endAnimation});

    
    //End animation

    //tl.to('.logo-2', {duration: 1, x: -87, ease: 'power1.out', onComplete: endAnimation}, 'entryBtn');
    

    //neither modify
    function endAnimation(){
        btnCTA.addEventListener('click', onClickCta);
        btnCTA.style.zIndex = 3000;

        startAutoPlay();
    }

}());