function pegaConjunto(tamanho, vetorPar, vetorImpar) {
    let conjunto = [];


    for (let i = 0; i < tamanho; i++) {
        let valor = Math.floor(Math.random() * 201) - 100;
        conjunto.push(valor);
    }

    let contadorPar = 0;
    let contadorImpar = 0;

    for (let i = 0; i < conjunto.length; i++) {
        if (conjunto[i] % 2 === 0) {
            if (contadorPar < 5) {
                vetorPar.push(conjunto[i]);
                contadorPar++;
            }
        } else {
            if (contadorImpar < 5) {
                vetorImpar.push(conjunto[i]);
                contadorImpar++;
            }
        }
    }
}

let vetorPar = [];
let vetorImpar = [];


pegaConjunto(30, vetorPar, vetorImpar);

if (vetorPar.length === 5) {
    console.log("O vetor par está cheio:", vetorPar);
} else {
    console.log("O vetor par é:", vetorPar);
}

if (vetorImpar.length === 5) {
    console.log("Vetor de Ímpares está cheio:", vetorImpar);
} else {
    console.log("Vetor de Ímpares:", vetorImpar);
}
