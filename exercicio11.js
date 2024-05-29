const prompt = require('prompt-sync')();
let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
let razao = parseInt(prompt("Digite a razão: "));

function termosPA(tamanho, primeiroTermo, razao) {
    let termos = [];
    termos.push(primeiroTermo);

    for (i = 2; i <= tamanho; i++) {
        let termo = primeiroTermo + (i - 1) * razao;
        termos.push(termo);
    }

    return termos
}

let termos = termosPA(10, primeiroTermo, razao);

let somaPA = (termos[0] + termos[termos.length - 1]) * 10 / 2

console.log(`Os 10 primeiros elementos da PA são: ${termos}.`);
console.log(`O resultado da soma desses termos é: ${somaPA}.`);
