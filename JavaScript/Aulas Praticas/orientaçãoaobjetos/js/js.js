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
    constructor(espec) {
        this.espec = espec
        }
        printEspec() {
            return this.espec
        }
}

animal = new Animal()

animal2 = new Animal('Gato','F')

class Cachorro extends Animal {
    constructor(espec,nome,raca,idade,peso,cor) {
        super(espec)
        this.nome = nome
        this.raca = raca
        this.idade = idade
        this.peso = peso
        this.cor = cor
    }
}

cachorro = new Cachorro('Cachorro','Meg','PitBull','4a','16kg','Preto')

alert(cachorro.cor)

