class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
    }

    fazerAniversario() {
        this.idade++
        this.altura += 0.02
    }

    comerBesteira() {
        this.peso++
    }
}

const howard = new Pessoa("Howard", 21, 1.8, 73)

howard.fazerAniversario()
howard.comerBesteira()
howard.comerBesteira()
howard.comerBesteira()
howard.comerBesteira()
howard.comerBesteira()
howard.comerBesteira()
howard.comerBesteira()
console.log(howard)

module.exports = Pessoa
