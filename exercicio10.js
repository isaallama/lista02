let continuar;
let soma = 0;
let menor = null;
let somatórioValores = 0;
let pares = 0;

do {
    const prompt = require('prompt-sync')();
    let numero = parseFloat(prompt("digite um número: "));

    if (!isNaN(numero)) {
        console.log(`O número escolhido foi: ${numero}`);

        soma += numero;

        if (menor === null || numero < menor) {
            menor = numero;
        }

        if (numero % 2 === 0) {
            pares++;
        }

        somatórioValores++;

    } else {
        console.log("O caractere escolhido não é um número.");
    }

    continuar = prompt("Continuar (s/n)? ");

} while (continuar === "s");

let media = soma / somatórioValores;

console.log(`A soma dos números é: ${soma}`);
console.log(`O menor número é: ${menor}`);
console.log(`A média dos números é: ${media}`);
console.log(`A quantidade de números pares é: ${pares}`);

console.log('Fim do programa.');

