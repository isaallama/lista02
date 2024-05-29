function pegaNumeros() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        prompt = require('prompt-sync')();
        let digiteNumeros = parseFloat(prompt(`Digite o ${i + 1}º número: `));
        numeros.push(digiteNumeros);
    }

    return numeros
}

function selecionarPares(numeros) {
    for (let i = 0; i < 10; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(`O números par é: ${numeros[i]} e a posição ocupada é: ${i + 1}`);
        }
    }
}

let numeros = pegaNumeros();
selecionarPares(numeros)

