const prompt = require('prompt-sync')();
let ValorA = parseInt(prompt("digite o valor de A: "));

function criarMatriz(linhas, colunas) {

    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            let valoresMatriz = Math.floor(Math.random() * 201) - 100;
            linha.push(valoresMatriz);
        }

        matriz.push(linha)

    }

    return matriz;
}

function retornoMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + "\t";
        }
        console.log(linha);
    }
}

function pegaIguais(ValorA, matriz) {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === ValorA) {
                return "Os valores da matriz V iguais ao valor A são: " + ValorA;
            }

        }
    }

    return "Não existem valores da matriz V iguais ao valor A";
}


function valoresDistintos(ValorA, matriz) {
    let novaMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        let linha = [];
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] !== ValorA) {
                linha.push(matriz[i][j]);
            }
        }
        if (linha.length > 0) {
            novaMatriz.push(linha);
        }
    }
    return novaMatriz;
}

let matrizV = criarMatriz(30, 30);
console.log("A matriz V é:");
retornoMatriz(matrizV);

let matrizX = valoresDistintos(ValorA, matrizV);
console.log("A nova matriz X gerada a partir de valores de V diferentes de A é:");
retornoMatriz(matrizX);

let valoresIguais = pegaIguais(ValorA, matrizV);
console.log(valoresIguais);
