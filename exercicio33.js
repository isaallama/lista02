const prompt = require('prompt-sync')();

function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            let valoresMatriz = Math.floor(Math.random() * 201) - 100;
            linha.push(valoresMatriz);
        }
        matriz.push(linha);
    }
    return matriz;
}

function retornoMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linhaFormatada = matriz[i].map(valor => valor.toFixed(2)).join('\t');
        console.log(linhaFormatada);
    }
}

function mediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][matriz.length - 1 - i];
    }
    return (soma / matriz.length).toFixed(2);
}

function multiplicacaoDiagonal(matriz) {
    let mediaSecundaria = parseFloat(mediaDiagonalSecundaria(matriz));
    for (let i = 0; i < matriz.length; i++) {
        matriz[i][i] *= mediaSecundaria;
    }
    return matriz;
}

let matriz = criarMatriz(3, 3);
console.log("A matriz original é:");
retornoMatriz(matriz);

let media = mediaDiagonalSecundaria(matriz);
console.log("Média da diagonal secundária: " + media);

let matrizMultiplicada = multiplicacaoDiagonal(matriz);
console.log("O resultado da multiplicação da diagonal principal pela média da diagonal secundária é:");
retornoMatriz(matrizMultiplicada);
