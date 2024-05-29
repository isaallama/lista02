
function criarMatriz(linhas, colunas) {
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

function somaAcimaDiagonal(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = i + 1; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        return soma;
    }

}

function somaAbaixoDiagonal(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        return soma;
    }

}


function retornoMatriz(matriz) {

    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }

}


let matrizGerada = criarMatriz(10, 10);
somaAcimaDiagonal(matrizGerada);
somaAbaixoDiagonal(matrizGerada);
retornoMatriz(matrizGerada);

console.log("A soma dos elementos acima da diagonal principal é:", somaAcimaDiagonal(matrizGerada));
console.log("A soma dos elementos abaixo da diagonal principal é:", somaAbaixoDiagonal(matrizGerada));
