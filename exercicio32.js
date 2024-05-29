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
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j].toFixed(2) + "\t";
        }
        console.log(linha);
    }
}
function divisorLinhas(matriz) {
    let novaMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        let maiorValorEmModulo = Math.max(...matriz[i].map(Math.abs));
        let novaLinha = matriz[i].map(valor => valor / maiorValorEmModulo);
        novaMatriz.push(novaLinha);
    }
    return novaMatriz;
}

let matrizM = criarMatriz(12, 13);
console.log("A matriz M é:");
retornoMatriz(matrizM);

let matrizDividida = divisorLinhas(matrizM);
console.log("A nova matriz após divisão é:");
retornoMatriz(matrizDividida);
