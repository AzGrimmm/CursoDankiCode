$(function(){

    verificarCliqueMenu()

    function verificarCliqueMenu(){
        $('a').click(function(){
           let href = $(this).attr('href')
            $.ajax({
                'beforeSend': function(){
                    console.log("Estamos chamando o beforeSend")
                },
                'timeout': 5000,
                'url': href,
                'error': function(jqXHR, textStatus, errorThrown){
                    if(jqXHR.statusText == 'Not Found'){
                    console.log("Página não encontrada!")
                    }
                },
                'success':function(data){
                    $('.container').html('')
                    $(data).appendTo('.container').fadeIn()
                }

            })
        })
    }

})