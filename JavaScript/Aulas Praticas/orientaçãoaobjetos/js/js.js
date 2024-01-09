/*

unction animalTag(){
    this.returnAnimal = function(animal) {
        return animal
    }
}


function Animal(esp,idade,peso) {
    this.esp = esp
    this.idade = idade
    this.peso = peso
}
animaltag = new animalTag()
animal1 = new Animal("cachorro","10a","15kg")
animal2 = new Animal("gato","8a","5kg")
*/


class Animal {
    constructor(nome) {
        this.nome = nome
    }
    printNome() {
        return this.nome
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome)
    }
}



cachorro = new Cachorro('Pitbul')

alert(cachorro.printNome())