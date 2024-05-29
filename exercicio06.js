const prompt = require('prompt-sync')();
let numero = parseInt(prompt("tente adivinhar um número entre 1 e 5: "));

function descubraNumero() {
    if (numero === 4) {
        console.log('você acertou!')
    } else {
        console.log('você errou, tente novamente')
    }
}

descubraNumero();

