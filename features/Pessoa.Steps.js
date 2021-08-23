const { Given, When, Then } = require("@cucumber/cucumber")

const assert = require("assert")

const kenzinha = require("../index")

Given('uma Pessoa de nome {string}', function (string) {
    kenzinha.nome = string
});

When('a Pessoa tiver {int} anos', function (int) {
    kenzinha.idade = int
});
  
When('a Pessoa tiver {float} de altura', function (float) {
    kenzinha.altura = float
});

When('fizer aniversário', function () {
    kenzinha.fazerAniversario()
});

Then('a idade da Pessoa será {int}', function (int) {
    assert.strictEqual(kenzinha.idade, int)
});

Then('a altura será {float}', function (float) {
    assert.strictEqual(kenzinha.altura, float)
});

When('a pessoa tiver {int} quilogramas', function (int) {
   kenzinha.peso = int
});

When('comer besteira {int} vezes', function (int) {
    for (let i = 0; i < int; i++) {
        kenzinha.comerBesteira()
    }
});

Then('o peso da pessoa será {int} quilogramas', function (int) {
    assert.strictEqual(kenzinha.peso, int)
});
