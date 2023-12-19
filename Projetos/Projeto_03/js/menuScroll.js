$(function(){
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSerTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});

		return false;
	})
});