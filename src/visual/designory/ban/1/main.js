	// 327 lines
// 654s
(function(){

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
        speed: 314000,
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

    //Animation
	
	var tl_bar = gsap.timeline();
	tl_bar.from('#eg_strip', {duration: 21, ease:"none",x:-200});
	tl_bar.to('.eg_bg', {duration: 3,ease:"none"});

    var tl = gsap.timeline();

	tl.set('body', {opacity: 1});
    tl.to('.copy1', {duration: 1, y:-47, ease: 'power4.inOut'} );

	tl.addLabel('frame1', '+=2'); //3sec

    tl.to('.copy1, .eg_bg', {duration: 1, opacity:0, ease: 'power4.inOut'}, 'frame1');
	tl.to('.copy2', {duration: 1, y:-47, ease: 'power4.inOut'} );
    tl.to('.Frame2 img', {delay:0.5, duration: 1, opacity:1, ease: 'none'}, 'frame1');

    tl.addLabel('frame2', '+=2'); //3sec

    tl.to('.circle_all, .imagesFrame', {delay:0.4, duration: 0.3, opacity:1, ease: 'none'}, 'frame2');
    tl.to('.Frame2 img, .copy2, #greenline', {duration: 0.5, opacity:0, ease: 'none'}, 'frame2');
    tl.to('.Frame-3 img, .Frame-logo img', {delay:0.5, duration: 1, opacity:1, ease: 'none'}, 'frame2');

    tl.to('.circle_mask', {duration: 11, rotate:360, transformOrigin:'100% 50%', delay:.9, ease: 'power0.out' }, 'frame2');
    tl.to('.circle_tapa, .circle_half_02', {duration: 0.1, opacity:1, delay:6.4, ease: 'power4.out'}, 'frame2');
    tl.to('.circle_half', {duration: 0.1, opacity:0, delay:6.4, ease: 'power4.out'}, 'frame2');
    tl.to("#redBox", { duration: 11, backgroundPosition:"-916px 0px", delay:1, ease: "steps(11)", repeat:0}, 'frame2');
    //tl.to(".circle_all, .imagesFrame", { duration: 0.2, opacity:0, delay:12.4, ease: 'power1.out'}, 'frame2');
    
    tl.addLabel('frame3', '+=0');  // 12 sec  ---- +1

    tl.to('.circle_all, .imagesFrame', {duration: 0.3, opacity:0, ease: 'none'}, 'frame3');
	tl.set('#ssi', {opacity: 0,top:118},'frame3');
    tl.to('.Frame-3 img', {duration: 0.5, opacity:0, ease: 'none'}, 'frame3');
	tl.to('#ssi', {duration: .8,opacity:1,delay:.6}, 'frame3');
    tl.to('.Frame-4 img, .eg_cta img, .Frame-merck img', {delay:0.5, duration: 1, opacity:1, ease: 'none'}, 'frame3');
	tl.to('.eg_cta img', {duration: .1,delay:2.5,onComplete: endAnimation}, 'frame3');

	
   //end
    
    function endAnimation(){
       // btnCTA.addEventListener('click', onClickCta);
       // btnCTA.style.zIndex = 802;

        startAutoPlay();
    }

}());