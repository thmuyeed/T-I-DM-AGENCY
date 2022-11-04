/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
	'use strict';

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	$(window).on('load', function () {
		// preloader
		$('.preloader').fadeOut(700);

		// Portfolio Filtering
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.portfolio-filter button').on('click', function () {
			$('.portfolio-filter button').removeClass('active');
			$(this).addClass('active');
		});
	});

	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */
	$('#post-thumb, #gallery-post').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000

	});
	$('#features').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});


	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});


	// counterUp
	function counter() {
		var oTop;
		if ($('.jsCounter').length !== 0) {
			oTop = $('.jsCounter').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.jsCounter').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1800,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}

	$(window).on('scroll', function () {
		counter();
	});



	//   magnific popup video
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-zoom-in',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true
	});

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */
	//Init the carousel
	$('#testimonials').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});


	/* ========================================================================= */
	/*	Smooth Scroll
	/* ========================================================================= */
	$('a.nav-link, .smooth-scroll').click(function (e) {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(':focus')) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					}
				});
			}
		}
	});


})(jQuery);
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();



/* testo*/
// for animation 

$(document).ready(function(){
  $('.pp-quote').click(function(){
    $('.pp-quote').removeClass("active");
    $(this).addClass("active");
});
});

$(document).ready(function(){
    
       // hide-top

        $('.li-quote-1').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');
            $('.quote-text-1').addClass('show');
            $('.quote-text-1').removeClass('hide-bottom');             
        });

        $('.li-quote-2').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');
            $('.quote-text-2').addClass('show');             
            $('.quote-text-2').removeClass('hide-bottom');
        });

        $('.li-quote-3').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');         
            $('.quote-text-3').addClass('show');             
            $('.quote-text-3').removeClass('hide-bottom');
        });
        $('.li-quote-4').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-4').addClass('show');             
            $('.quote-text-4').removeClass('hide-bottom');
        });
        $('.li-quote-5').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-5').addClass('show');             
            $('.quote-text-5').removeClass('hide-bottom');
        });
        $('.li-quote-6').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-6').addClass('show');             
            $('.quote-text-6').removeClass('hide-bottom');
        });
        $('.li-quote-7').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-7').addClass('show');             
            $('.quote-text-7').removeClass('hide-bottom');
        });
        $('.li-quote-8').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-8').addClass('show');             
            $('.quote-text-8').removeClass('hide-bottom');
        });
            $('.li-quote-9').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-8').addClass('show');             
            $('.quote-text-8').removeClass('hide-bottom');
        });
           
    
});


$(document).ready(function(){
    
       // hide-top

        $('.li-quote-1').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-1').addClass('look');
            $('.dp-name-1').removeClass('hide-dp-bottom');             
        });

        $('.li-quote-2').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-2').addClass('look');
            $('.dp-name-2').removeClass('hide-dp-bottom');             
        });

        $('.li-quote-3').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-3').addClass('look');
            $('.dp-name-3').removeClass('hide-dp-bottom');             
        });
		$('.li-quote-4').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-4').addClass('look');
            $('.dp-name-4').removeClass('hide-dp-bottom');             
        });
		
        $('.li-quote-5').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-5').addClass('look');
            $('.dp-name-5').removeClass('hide-dp-bottom');             
        });
		
        $('.li-quote-6').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-6').addClass('look');
            $('.dp-name-6').removeClass('hide-dp-bottom');             
        });
        $('.li-quote-7').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-7').addClass('look');
            $('.dp-name-7').removeClass('hide-dp-bottom');             
        });
        $('.li-quote-8').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-8').addClass('look');
            $('.dp-name-8').removeClass('hide-dp-bottom');             
		});
		$('.li-quote-9').click(function (e) { 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-8').addClass('look');
            $('.dp-name-8').removeClass('hide-dp-bottom');             
        });
           
    
});

