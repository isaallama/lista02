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

function retornoMatriz(matriz) {

    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }

}

function somaLinha4(matriz) {
    let soma = 0;

    for (let i = 0; i < 5; i++) {
        soma += matriz[3][i]
    }

    return soma;
}

function somaColuna2(matriz) {
    let soma = 0;

    for (let i = 0; i < 5; i++) {
        soma += matriz[i][1]
    }

    return soma;
}

function somaDiagonal(matriz) {

    let soma = 0;

    for (let i = 0; i < 5; i++) {
        soma += matriz[i][i]
    }

    return soma;
}

function somaMatrizM(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            soma += matriz[i][j]
        }
    }
    return soma;
}


let matrizGerada = matrizM(5, 5);
somaColuna2(matrizGerada);
retornoMatriz(matrizGerada);
somaLinha4(matrizGerada);
somaDiagonal(matrizGerada);
somaMatrizM(matrizGerada);

console.log("A soma dos elementos da linha 4 é:", somaLinha4(matrizGerada))
console.log("A soma dos elementos da coluna 2 é:", somaColuna2(matrizGerada))
console.log("A soma dos elementos da diagonal principal é:", somaDiagonal(matrizGerada))
console.log("A soma dos elementos da matriz é:", somaMatrizM(matrizGerada)) 
