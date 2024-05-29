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



function somaColunas(matriz) {
  let soma = Array.from({ length: matriz[0].length }, () => 0);
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma[j] += matriz[i][j];
    }
  }
  return soma;
}

const matriz = criarMatriz(15, 20);
retornoMatriz(matriz);
const resultadoSoma = somaColunas(matriz);
console.log("A soma de cada coluna da matriz é:", resultadoSoma);
