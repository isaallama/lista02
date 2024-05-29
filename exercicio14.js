function pegaNomes() {
    let nomes = [],

        prompt = require('prompt-sync')();
    for (let i = 0; i < 7; i++) {

        let digiteNomes = prompt(`digite o ${i + 1}º nome: `);
        nomes.push(digiteNomes);

    }

    return nomes
}

const nomes = pegaNomes()
const guardaNome = new Array(nomes)

let listaInvertida = nomes.slice(0).reverse();

console.log(listaInvertida)

