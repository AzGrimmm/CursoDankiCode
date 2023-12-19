Eventos
.click(function){} // Ao clicar

.val() // pega o valor do input

.split("") // separa a string em array com base no parametro

.substr(0,0) // recorta as letras da string apartir do parametro 1, retorna as letras com base no parametro 2

.html(``) // cria elementos no html

.append(``) // adiciona conteúdo/elementos no final do elemento que selecionamos

.eq() // escolhe qual elemento no html, com base no parametro

(`conteudo`).appendTo($('elemento')) // adiciona conteúdo/elementos no final do elemento que selecionamos

(`conteudo`).prependTo($('elemento')) // adiciona conteúdo/elementos no inicio do elemento que selecionamos

.prepend(``) // adiciona conteúdo/elementos no incio do elemento que selecionamos

.after() //  adiciona conteúdo/elementos depois do elemento que selecionamos

.before() //  adiciona conteúdo/elementos antes do elemento que selecionamos

$().insertAfter($('')).css('') // adiciona conteúdo/elementos depois do elemento e modifica o css

$().insertBefore($('')).css('') // adiciona conteúdo/elementos antes do elemento e modifica o css

.remove() // remove elementos do html

.removeClass('') //remove classes

setTimeout(function(){},3000 ) // adiciona um tempo na função

.on( , , ) //adicina eventos em elementos adicionados por Jquery

.keydown() // evento quando pessiona tecla

.keyup() // evento quando solta tecla

.fadeOut() // faz o elemento desaparecer

.fadeIn() // faz o elemento aparecer

.slideToggle() // faz aparecer o elemento deslisando para baixo

.animate({'','',''},2000,function()) // anima o elemnto com base nos parametros nas chaves e no tempo

.find() //procura o elemento

.clone() // clona o elemento

.stopPropagation() //para a animaçao

.each() // percorre cada elemento

.match(/[A-Z a-z 0-9]{3,6}/) // verifica se à os caracteres dos parametros no elemento
.match(/^(.*?)@(.*?)$/) // pega tudo que esta entre parentes até o aroba,^: garante que começa do inicio, $: garante que chega até o final

$.ajax({   // buscar conteudo de outra url, local ou externo sem atualizar o site
    'url','',
    'method':'post',
    data:{}
    
}).done(function(data){

})

this // faz referencia ao elemento

clearTimeout() // cancela o timeOut
clearInterval() // cancela o Interval

$.fn.aplicarCor = function(options){
    
}