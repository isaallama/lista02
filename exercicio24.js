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
        console.log(matriz[i].join('\t'));
    }

}

function contagemNegativos(matriz) {

    let vetorC = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                vetorC++;
            }

        }

    }

    return vetorC;
}

criarMatriz(6, 8)
contagemNegativos(criarMatriz(6, 8))
retornoMatriz(criarMatriz(6, 8))

console.log("a quantidade de negativos da matriz é:", contagemNegativos(criarMatriz(6, 8)))
