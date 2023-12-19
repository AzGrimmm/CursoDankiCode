$(function(){
	$('.menu-mobile').click(function(){
		$(this).find('ul').slideToggle();
		$('.servicos .container').css('padding-top','100px');
	})
});