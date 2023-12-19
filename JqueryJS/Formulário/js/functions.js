$ ( function (){
	
/*
	let frase = "Olá Mundo"

	var verifica = frase.match(/Olá/)
	
	if(verifica != null){
		console.log("Encontramos algo")
	} else {
		console.log("Não Encontramos nada!")
	}
*/

//Funções de abrir e fechar formulário.

	abrirJanela()
	verificarCliqueFechar()

	function abrirJanela(){
		$('#btn').click(function(e){
			e.stopPropagation()
			$('#bg').fadeIn()
		
		})
		$('#form').click(function(e){
			e.stopPropagation()
		})
	}

	function verificarCliqueFechar(){
		let el = $('body , #closeBtn')
		el.click(function(){
			$('#bg').fadeOut()
			
		})
		
	}

	//Eventos do Formulário.

	$('input[type=text]').focus(function(){
		resetarCampoInvalido($(this))
	})

	$('form#form1').submit(function(e){
		e.preventDefault()
		let nome = $('input[name=nome]').val()
		let telefone = $('input[name=telefone]').val()
		let email = $('input[name=email]').val()

		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'))
			return false
		}else if(verificarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'))
			return false
		}else if(verificarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'))
			return false
		}else{
			alert('formulário enviado com sucesso!')
		}
		
	})

	//Funções para estilizar o Campo do formulário.

	function aplicarCampoInvalido(el){
		el.css('border','2px solid red')
		//el.data('invalido','true')
		el.val('Campo Inválido!')
		el.css('color','red')
	}

	function resetarCampoInvalido(el){

		el.css('border','2px solid black')
		//el.data('invalido','true')
		el.val('')
		el.css('color','black')
	}

	//funções para verificar nosso campos.

	function verificarNome(nome){
		//Contando a quantidade e os respectivos valores.
		if(nome == ''){
			return false
		}
		let amount = nome.split(' ').length
		let splitStr = nome.split(' ')
		if(amount >= 2){
			for(let i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
				
				}else{
					return false
				}
			}
		}else{
			return false
		}
	}

	function verificarTelefone(telefone){
		if(telefone == ''){
			return false
		}
		if(!telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/)){
			return false
		}
	}

	function verificarEmail(email){
		if(email == ''){
			return false
		}
		if(!email.match(/^([A-Za-z0-9-_.]{1,})+@+([a-z.]{1,})$/)){
			return false
		}
	}

	
})
