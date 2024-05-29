function gerarNúmeros() {
    let números = [];

    for (let i = 0; i < 6; i++) {
        let número = Math.floor(Math.random() * 100) + 1;
        números.push(número);
    }

    return números;
}

function realizarOperações(numeros) {
    let soma = 0;
    let multiplicação = 1;

    for (let i = 0; i < 6; i++) {
        soma = soma + numeros[i];
        multiplicação = multiplicação * numeros[i];
    }

    let média = soma / 6;
    console.log(`A soma dos 6 números é: ${soma}`);
    console.log(`A multiplicação dos 6 números é: ${multiplicação}`);
    console.log(`A média dos 6 números é: ${média}`);

    return [soma, multiplicação, média];
}

let números = gerarNúmeros();
let operações = realizarOperações(números);
let ordenar = números.slice().sort((a, b) => a - b);
console.log("Os números ordenados são:", ordenar);
console.log("Os números gerados são:", números);
