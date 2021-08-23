# language: pt

Funcionalidade: Pessoa
    Como Pessoa
    Eu devo comer bem
    Para que eu possa me manter saudável

    Contexto:
        Dado uma Pessoa de nome "Kenzinha"

    Cenário: Fez aniversário
        Quando a Pessoa tiver 18 anos 
        E a Pessoa tiver 1.60 de altura
        E fizer aniversário
        Então a idade da Pessoa será 19
        E a altura será 1.62

    Cenário: Comeu besteira
        Quando a pessoa tiver 50 quilogramas
        E comer besteira 3 vezes
        Então o peso da pessoa será 53 quilogramas
