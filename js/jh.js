$(function () {
	
	// $topLevelElements = $('nav, main, footer');
	// $topLevelElements.hide();

	// $('body').width(0).animate({"width":"100%"}, 1000, 'swing', showElements);
	// typing();

	$('input, textarea').on('keyup click', moveUpFormGroup);


	function showElements() {
		$topLevelElements.fadeIn(1000);
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



 