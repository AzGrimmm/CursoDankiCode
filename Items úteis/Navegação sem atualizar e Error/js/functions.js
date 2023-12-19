$(function(){
	verificarCliqueMenu();

	function verificarCliqueMenu(){
		$('a').click(function(){
			var href = $(this).attr('href');
			$.ajax({
				'timeout': 10000,
				'url':href,
				'error': function(event,jqXHR,ajaxSettings,thrownError){
					if(event.statusText == 'Not Found'){
						console.log("Pagina não Encontrada");
					}
				},
				'success': function(data){
					//$('#container').html(data);
					$('#container').html('');
					$(data).appendTo('#container').fadeIn();
				}
			})
			return false;
		})
	}
});