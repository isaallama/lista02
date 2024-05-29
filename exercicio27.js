const prompt = require('prompt-sync')();

function matrizM(tamanho) {

    const matriz = [];

    for (let i = 0; i < tamanho; i++) {
        let linha = [];
        for (let j = 0; j < tamanho; j++) {
            let valor = parseInt(prompt(`digite o valor da posição [${i + 1}][${j + 1}]: `));
            linha.push(valor);
        }

        matriz.push(linha);
    }

    return matriz;
}


function multiplicarRaiz(matriz, valor) {
    let matrizResultado = [];
    for (let i = 0; i < matriz.length; i++) {
        let linhaResultado = [];
        for (let j = 0; j < matriz[i].length; j++) {
            linhaResultado.push(matriz[i][j] * valor);
        }
        matrizResultado.push(linhaResultado);
    }
    return matrizResultado;
}


let m = matrizM(6, 6);
let a = Math.floor(Math.random() * 201) - 100;
let vetorV = [];
let matrizMultiplicada = multiplicarRaiz(m, a);


for (let i = 0; i < matrizMultiplicada.length; i++) {
    for (let j = 0; j < matrizMultiplicada[i].length; j++) {
        vetorV.push(matrizMultiplicada[i][j]);
    }
}


console.log("A matriz M é:", m);
console.log("O valor de A é:", a);
console.log("A matriz M multiplicada por A é:", matrizMultiplicada);
console.log("Vetor V:", vetorV);
