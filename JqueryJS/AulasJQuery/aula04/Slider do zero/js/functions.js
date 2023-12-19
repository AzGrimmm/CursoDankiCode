$(function(){

let indiceAtual = 0
let indiceMaximo = $('.slider img').length
let delay = 3000

console.log(indiceMaximo)

cliqueSlider()
initSlider()
    function initSlider(){
        for (let i = 0; i < indiceMaximo; i++) {
            if(i == 0){
                $('.bullets-nav').append('<span style="background-color: black"></span>')
            }else{
                $('.bullets-nav').append('<span></span>')
            }
            
        }
        $('.slider img').each(function(i){
            if(i == 0){
                $(this).fadeIn()
                setInterval(function(){
                    alternarSlider()
                },1000)
            }
        })
    }

    function cliqueSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider img').eq(indiceAtual).stop().fadeOut()
            indiceAtual = $(this).index()
            $('slider img').eq(indiceAtual).stop().fadeIn()
            $('.bullets-nav span').css('background-color','')
            $(this).css('background-color','black')
        })
    }

    function alternarSlider(){
        $('.slider img').eq(indiceAtual).stop().fadeOut()
        indiceAtual += 1
        if(indiceAtual == indiceMaximo){
            indiceAtual = 0
        }
        $('.slider img').eq(indiceAtual).stop().fadeIn()
        $('.bullets-nav span').css('background-color','')
        $('.bullets-nav span').eq(indiceAtual).css('background-color','black')

    }

})