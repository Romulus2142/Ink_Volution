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
    tl.set('body', {opacity: 1});

    tl.addLabel('frame1'); 
    tl.to('.bubble_1 img', {duration: 0.7, scale: 2, x:0, y:0, opacity:1, transformOrigin:'center center', ease: 'elastic.out'}, 'frame1');
    tl.to('.bubble_2 img', {duration: 0.7, scale: 2, x:0, y:0, opacity:1, transformOrigin:'center center', delay:0.3, ease: 'elastic.out'}, 'frame1');
    tl.to('.bubble_3 img', {duration: 0.7, scale: 2, x:0, y:0, opacity:1, transformOrigin:'center center', delay:0.7, ease: 'elastic.out'}, 'frame1');
    tl.to('.copy1', {duration: 0.6, opacity:1,ease: 'power2.out'},'+=0');
    tl.to('.square_1', {duration: 0.3, width: 156,opacity:1,ease: 'power2.out'},'+=0.1');

    tl.addLabel('frame2', '+=3.4'); //4 sec frame 1
    tl.to('#clickTag', {duration: 0.6, height: 160, ease: 'power2.out'}, 'frame2');
    tl.to('.logoFrame', {duration: 0.6, x: 300, ease: 'power2.out'}, 'frame2');
    tl.from('#ssi', {duration: 0.6, opacity:0, ease: 'power2.out'}, 'frame2');
    tl.to('.bubble_4_b img', {duration: 0.5, delay:0.6, opacity:1, ease: 'power2.out'}, 'frame2');
    tl.to('.circle_nex, .tercerFrame', {duration: 0.3, opacity:1, delay:0.5, ease: 'power2.out'}, 'frame2');
    tl.to('.fondo_nex', {duration: 0.3, opacity:0, delay:0.7, ease: 'power2.out'}, 'frame2');
    tl.to('.logoFrame', {duration: 1, opacity:0, delay:3, ease: 'power2.out'}, 'frame2');
    tl.to('.bubble_4_b img', {duration: 0.7, y:-225, transformOrigin:'bottom center', delay:2.9, ease: 'power2.out'}, 'frame2');
    tl.to('.bubble_4_b img', {duration: 0.7, x:-100,y:-240, width:146, transformOrigin:'bottom center', delay:0.2, ease: 'power2.out'},'-=0.5');
    tl.to('.bubble_4_y img', {duration: 0.7, y:-120, transformOrigin:'bottom center', delay:0.2, ease: 'power2.out'},'-=0.5');

    tl.to('.fondo_03b', {duration: 0.5, x:-150, transformOrigin:'bottom center', delay:0.2, ease: 'power2.out'},'-=0.5');

    tl.addLabel('frame3', '+=1');  
    tl.to('.bubble_4_b img', {duration: 0.4, x:-203,y:-240, width: 82, transformOrigin:'bottom center', ease: 'power2.out'}, 'frame3');
    tl.to('.name2b', {duration: 1, opacity:1, ease: 'power2.out'}, 'frame3');
    tl.to('.bubble_4_y img', {duration: 0.4, x:61,y:-95, width: 82, transformOrigin:'bottom center', ease: 'power2.out'}, 'frame3');
    tl.to('.square_2', {duration: 0.3, width: 216,opacity:1,ease: 'power2.out'},'+=0');

    tl.addLabel('frame4', '+=3');  // 4 sec
    tl.to('.name2b, .square_2', {duration: 0.5, opacity:0, ease: 'power2.out'}, 'frame4');
    tl.to('.bubble_4_b img', {duration: 0.4, x:70, transformOrigin:'bottom center', scaleX:-1, ease: 'power2.out'}, 'frame4');
    tl.to('.bubble_4_y img', {duration: 0.4, x:-200, transformOrigin:'bottom center', scaleX:-1, ease: 'power2.out'}, 'frame4');
    tl.to('.name2c, .name2d', {duration: 0.6, delay:0.5, opacity:1, ease: 'power2.out'}, 'frame4');
    
    tl.addLabel('frame5', '+=3');  // 4 sec
    tl.to('.name2c, .name2d', {duration: 0.5, opacity:0, ease: 'power2.out'}, 'frame5');
    tl.to('.bubble_4_b img', {duration: 0.4, x:-190, transformOrigin:'bottom center', scaleX:1,ease: 'power2.out'}, 'frame5');
    tl.to('.bubble_4_y img', {duration: 0.4, x: 59, transformOrigin:'bottom center', scaleX:1, ease: 'power2.out'}, 'frame5');
    tl.to('.text7 img', {duration: 0.6, delay:0.5, opacity:1, ease: 'power2.out'}, 'frame5');

    tl.addLabel('frame6', '+=2.4');  // 3 sec
    tl.to('.text7 img', {duration: 0.5, opacity:1, opacity:0, ease: 'power2.out'}, 'frame6');
    tl.to('.bubble_4_b img', {duration: 0.4, x:70, transformOrigin:'bottom center', scaleX:-1, ease: 'power2.out'}, 'frame6');
    tl.to('.bubble_4_y img', {duration: 0.4, x:-200, transformOrigin:'bottom center', scaleX:-1, ease: 'power2.out'}, 'frame6');
    tl.to('.text8 img, .copy2f img', {duration: 0.6, delay:0.5, opacity:1, ease: 'power2.out'}, 'frame6');
    tl.to('.square_3', {duration: 0.3, width: 225, opacity:1, ease: 'power2.out'},'+=0');

    tl.addLabel('last', '+=5.4'); //6 sec
    tl.to('.copy2f img, .bubble_4_b img, .bubble_4_y img', {duration: 0.5, opacity:0, ease: 'power2.out'}, 'last');
    tl.to('.fondo_blue img', {duration: 0.3, opacity:1, ease: 'power2.out'}, 'last');
    tl.to('.bubble_5 img', {duration: 0.3, width:264, opacity:1, transformOrigin:'center center',ease: 'power2.out'}, 'last');
    tl.to('.text9 img', {duration: 0.3, delay: 0.3, opacity:1, ease: 'power2.out'}, 'last');
    tl.to('.square_4', {duration: 0.3, width: 218, opacity:1,ease: 'power2.out'},'+=0');
    tl.to('.cta img', {duration: 0.3, delay: 0.6, opacity:1, ease: 'power2.out'}, 'last');

    tl.add(endAnimation, "+=2.6");
    tl.to('#ssi', {onComplete: endAnimation},'+=0');

    //End animation

    

    //neither modify
    function endAnimation(){
        //btnCTA.addEventListener('click', onClickCta);
        //btnCTA.style.zIndex = 802;

        startAutoPlay();
    }
    

}());