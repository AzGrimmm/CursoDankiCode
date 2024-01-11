var span = document.querySelector('main span')

span.addEventListener('click', ()=> {
    var conteudo = document.querySelector('main p')
    if(conteudo.classList.contains('mostrar')) {
        conteudo.classList.remove('mostrar')
    } else {
        conteudo.classList.add('mostrar')
    }
    
})

class Animal {
    constructor(esp){
        this.esp = esp
        
    }
    printEsp() {
        return this.esp
    }
}

animal = new Animal('cachorro')



class Cachorro extends Animal {
    constructor(esp,nome,raca,cor) {
        super(esp)
        this.nome = nome
        this.raca = raca
        this.cor = cor
    }
}
cachorro = new Cachorro('dog')

alert(cachorro.nome)