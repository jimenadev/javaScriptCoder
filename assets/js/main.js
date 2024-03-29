(function ($) {
    "use strict";


/*--
    Menu Sticky
-----------------------------------*/
var windows = $(window);
var sticky = $('.header-sticky');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    }else{
        sticky.addClass('is-sticky');
    }
});


/*--
   Sidebar Search Active
-----------------------------*/
function sidebarSearch() {
    var searchTrigger = $('.trigger-search'),
        endTriggersearch = $('button.search-close'),
        container = $('.main-search-active');

    searchTrigger.on('click', function() {
        container.addClass('inside');
    });

    endTriggersearch.on('click', function() {
        container.removeClass('inside');
    });

};
sidebarSearch();
    
/*-------- Off Canvas Open close start--------*/
$(".off-canvas-btn").on('click', function () {
    $("body").addClass('fix');
    $(".off-canvas-wrapper").addClass('open');
});

$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
    $("body").removeClass('fix');
    $(".off-canvas-wrapper").removeClass('open');
});
    
    

/*-------- Off Canvas Open close start--------*/
$(".off-canvas-btn").on('click', function () {
    $("body").addClass('fix');
    $(".off-canvas-wrapper").addClass('open');
});

$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
    $("body").removeClass('fix');
    $(".off-canvas-wrapper").removeClass('open');
});
/*-------- Off Canvas Open close end--------*/


/*------- product view mode change js start -------*/
$('.product-view-mode a').on('click', function (e) {
    e.preventDefault();
    var shopProductWrap = $('.shop-product-wrap');
    var viewMode = $(this).data('target');
    $('.product-view-mode a').removeClass('active');
    $(this).addClass('active');
    shopProductWrap.removeClass('grid-view list-view').addClass(viewMode);
})
/*------- product view mode change js end -------*/


/*------- Countdown Activation start -------*/
$('[data-countdown]').each(function () {
    var $this = $(this),
        finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Mins</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Secs</span></div>'));
    });
});
/*------- Countdown Activation end -------*/


// quantity change js
$('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
$('.pro-qty').append('<span class="inc qtybtn">+</span>');
$('.qtybtn').on('click', function () {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find('input').val(newVal);
});


/*-------- scroll to top start --------*/
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
        $('.scroll-top').removeClass('not-visible');
    } else {
        $('.scroll-top').addClass('not-visible');
    }
});
$('.scroll-top').on('click', function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});
/*-------- scroll to top end --------*/


/*------- Category Menu start -------*/
// Variables
var categoryToggleWrap = $('.category-toggle-wrap');
var categoryToggle = $('.category-toggle');
var categoryMenu = $('.category-menu');

// Category Menu Toggles
function categorySubMenuToggle() {
    var screenSize = $window.width();
    if (screenSize <= 991) {
        $('.category-menu .menu-item-has-children > a').prepend('<span class="expand menu-expand">+</span>');
        $('.category-menu .menu-item-has-children ul').slideUp();
    } else {
        $('.category-menu .menu-item-has-children > a .menu-expand').remove();
        $('.category-menu .menu-item-has-children ul').slideDown();
    }
}
// Category Sub Menu
$('.category-menu').on('click', 'li a, li a .menu-expand', function (e) {
    var $a = $(this).hasClass('menu-expand') ? $(this).parent() : $(this);
    if ($a.parent().hasClass('menu-item-has-children')) {
        if ($a.attr('href') === '#' || $(this).hasClass('menu-expand')) {
            if ($a.siblings('ul:visible').length > 0) $a.siblings('ul').slideUp();
            else {
                $(this).parents('li').siblings('li').find('ul:visible').slideUp();
                $a.siblings('ul').slideDown();
            }
        }
    }
    if ($(this).hasClass('menu-expand') || $a.attr('href') === '#') {
        e.preventDefault();
        return false;
    }
});
/*------- Category Menu end -------*/


/*------- responsive mobile menu start -------*/
//Variables
var $offCanvasNav = $('.mobile-menu'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

//Add Toggle Button With Off Canvas Sub Menu
$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

//Close Off Canvas Sub Menu
$offCanvasNavSubMenu.slideUp();

//Category Sub Menu Toggle
$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length){
            $this.parent('li').removeClass('active');
            $this.siblings('ul').slideUp();
        } else {
            $this.parent('li').addClass('active');
            $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
            $this.closest('li').siblings('li').find('ul:visible').slideUp();
            $this.siblings('ul').slideDown();
        }
    }
});

    
/*--
    Hero Slider
--------------------------------------------*/
var heroSlider = $('.hero-slider-one');
heroSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: false,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"> <i class="ion-ios-arrow-thin-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-thin-right"></i></button>',
    responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
          }
        }
    ]
});
/*--
    Hero Slider Two
--------------------------------------------*/
var heroSlider = $('.hero-slider-two');
heroSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: false,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"> <i class="ion-ios-arrow-thin-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-thin-right"></i></button>',
    responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
          }
        }
    ]
});
/*--
    Product Slider
--------------------------------------------*/
var product_4 = $('.product-active-lg-4');
product_4.slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"> <i class="ion-ios-arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
var product_two_row_4 = $('.product-two-row-4');
product_two_row_4.slick({
    dots: false,
    infinite: false,
    rows: 2,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"> <i class="ion-ios-arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
/*-- 
    Testimonial Slider 
-----------------------------*/
var testimonialSlider = $('.testimonial-slider');
testimonialSlider.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScoll: 1,
    prevArrow: '<button type="button" class="slick-prev"> <i class="ion-ios-arrow-thin-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-thin-right"></i></button>'
});
   

/* Product Details Images Slider */
$('.product-details-images').each(function(){
    var $this = $(this);
    var $thumb = $this.siblings('.product-details-thumbs');
    $this.slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: 0,
        asNavFor: $thumb,
    });
});
$('.product-details-thumbs').each(function(){
    var $this = $(this);
    var $details = $this.siblings('.product-details-images');
    $this.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<button type="button" class="slick-prev"> <i class="ion-ios-arrow-thin-left"></i> </button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ion-ios-arrow-thin-right"></i></button>',
        asNavFor: $details,
    });
});



/* Product Details 2 Images Slider */
 $('.product-details-images-2').each(function(){
    var $this = $(this);
    var $thumb = $this.siblings('.vartical-product-active');
    $this.slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: false,
        centerMode: false,
        centerPadding: 0,
        asNavFor: $thumb,
    });
});
$('.vartical-product-active').each(function(){
    var $this = $(this);
    var $details = $this.siblings('.product-details-images-2');
    $this.slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        vertical:true,
        verticalSwiping:true,
        dots: false,
        infinite: false,
        focusOnSelect: true,
        centerMode: false,
        centerPadding: 0,
        prevArrow: '<span class="slick-prev"><i class="fa fa-angle-up"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fa fa-angle-down"></i></span>',
        asNavFor: $details,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 479,
            settings: {
            slidesToShow: 2,
            }
        }
    ]
    });
});

/*----------
    price-slider active
-------------------------------*/  
$( "#price-slider" ).slider({
   range: true,
   min: 0,
   max: 80000,
   values: [ 0, 80000 ],
   slide: function( event, ui ) {
        $( "#min-price" ).val('$' + ui.values[ 0 ] );
        $( "#max-price" ).val('$' + ui.values[ 1 ] );
     }
  });
  $( "#min-price" ).val('$' + $( "#price-slider" ).slider( "values", 0 ));   
  $( "#max-price" ).val('$' + $( "#price-slider" ).slider( "values", 1 )); 
    

/*--
    showlogin toggle function
--------------------------*/
$( '#showlogin' ).on('click', function() {
    $('#checkout-login' ).slideToggle(500);
}); 
    
/*--
    showcoupon toggle function
--------------------------*/
$( '#showcoupon' ).on('click', function() {
    $('#checkout-coupon' ).slideToggle(500);
});
    
/*--
    Checkout 
--------------------------*/
$("#chekout-box").on("change",function(){
    $(".account-create").slideToggle("100");
});
    
/*-- 
    Checkout 
---------------------------*/
$("#chekout-box-2").on("change",function(){
    $(".ship-box-info").slideToggle("100");
});    

/*--
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="ion-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});    
    
    
    
    
    
    
    
    
    
    
    
    
    
})(jQuery);

