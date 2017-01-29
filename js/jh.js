$(function () {
	

	$topLevelElements = $('header, main, footer');
	$heightCache = $(document).height();
	$topLevelElements.hide();

	$('#pre-loader').height($heightCache);
	$('#pre-loader').width(0).animate({"width":"100%"}, 1000, 'swing', showElements);
	typing();

	$('input, textarea').on('keyup click', moveUpFormGroup);

	$('.js-fade-in').css({"opacity":0});
	$('.js-slide-down').hide();
	$('.js-slide-up').hide();

	$(window).on('scroll', function() {

		if ( $(window).width() > 992 ) {
			if ( $('.js-fade-in').offset().top  < ( $(window).scrollTop() + ($(window).height() / 2) ) ) {
				$('.js-fade-in').animate({"opacity":1}, 3000 );	
			}

			if ( $('.js-slide-down').parent().offset().top < ( $(window).scrollTop() + ($(window).height() / 4) ) ) {
				$('.js-slide-down').show('slide', {direction: 'right'}, 1000);
			}

			if ( $('.js-slide-up').parent().offset().top < ( $(window).scrollTop() + ($(window).height() * 0.75) ) ) {
				$('.js-slide-up').show('slide', {direction: 'down'}, 1000);
			}
		} else {
			$('.js-fade-in').css({"opacity":1});
			$('.js-slide-down').show();
			$('.js-slide-up').show();
		}
	});

	$('.project-btn').click( function( event ) {
		event.preventDefault();
		$('html, body').animate({
	        scrollTop: $(".project-intro").offset().top
	    }, 1000);
	});


	function showElements() {
		$('#pre-loader').height('0px');
		$topLevelElements.fadeIn(2000);
		typing()
	}

	function typing() {
		$('.type-it').typeIt({
			lifeLike: false,
			autoStart: false,
			startDelay: 1000,
			startDelete: true,
			callback: afterTyping,
		})
		.tiType('I am a web designer and developer.')
		.tiPause(1000)
		.tiDelete(34)
		.tiType('I build bespoke websites.');
		
	}

	function afterTyping() {
		setTimeout(function(){
		    $('.ti-cursor').remove();
		}, 2000);
	}

	function moveUpFormGroup() {
		$(this).parent('.form-group').addClass('move-on-up');
    }



});



 