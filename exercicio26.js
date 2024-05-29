function matrizA(linhas, colunas) {
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

function matrizB(linhas, colunas) {
    let matriz = [];

    for (let k = 0; k < linhas; k++) {
        let linha = [];
        for (let l = 0; l < colunas; l++) {
            let valoresMatriz = Math.floor(Math.random() * 201) - 100;
            linha.push(valoresMatriz);
        }

        matriz.push(linha);
    }

    return matriz;
}

function multiplicarMatriz(matrizA, matrizB) {

    let matrizC = [];

    for (let i = 0; i < matrizA.length; i++) {
        let linha = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < matrizB.length; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            linha.push(soma);
        }
        matrizC.push(linha);
    }

    return matrizC;
}

let a = matrizA(3, 5);
let b = matrizB(3, 5);
let c = multiplicarMatriz(a, b);

console.log("A matriz A é:", a);
console.log("A matriz B é:", b);

console.log("A multipliação da matriz A por B é:", c);
