function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            let valoresMatriz = (Math.random() * 200 - 100).toFixed(2);
            linha.push(parseFloat(valoresMatriz));
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

function multiplicarLinha(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let diagonalPrincipal = matriz[i][i];
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] *= diagonalPrincipal;
        }
    }
    return matriz;
}

let matrizGerada = criarMatriz(50, 50);
console.log("Matriz original:");
retornoMatriz(matrizGerada);

let novaMatriz = multiplicarLinha(matrizGerada);
console.log("\nMatriz após as multiplicações:");
retornoMatriz(novaMatriz);
