function matrizIdentidade(tamanho) {

    for (let i = 0; i < tamanho; i++) {
        linha = '';
        for (let j = 0; j < tamanho; j++) {
            if (i === j) {
                linha += '1\t';
            } else {
                linha += '0\t';
            }
        }
        console.log(linha.trim());

    }
}

(matrizIdentidade(7))
