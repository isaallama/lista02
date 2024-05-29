
function matrizM(linhas, colunas) {
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            let valoresMatriz = Math.floor(Math.random() * 201) - 100;
            linha.push(valoresMatriz)

        }

        matriz.push(linha)

    }

    return matriz
}

function somaLinhas(matriz) {
    let soma = Array.from({ length: matriz.length }, () => 0)
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma[i] += matriz[i][j]
        }
    }
    return soma
}

function somaColunas(matriz) {
    let soma = Array.from({ length: matriz[0].length }, () => 0)
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma[j] += matriz[i][j]
        }
    }
    return soma
}


let matriz = matrizM(5, 5);

let vetorSL = somaLinhas(matriz);
let vetorSC = somaColunas(matriz);



console.log("A matriz M é:", matriz)
console.log("O valor do vetor SL:", vetorSL)
console.log("O valor do vetor SC:", vetorSC)
