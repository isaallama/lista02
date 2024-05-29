function vetorA() {
    let números = [];

    for (let i = 0; i < 100; i++) {
        let número = Math.floor(Math.random() * 201) - 100;
        números.push(número);
    }

    return números;
}

function novoVetorA(vetorA) {
    let números = [];

    for (let i = 0; i < vetorA.length; i++) {
        if (vetorA[i] > 0) {
            números.push(vetorA[i]);
        }
    }

    return números;
}


let valoresA = vetorA();
let vetorB = novoVetorA(valoresA);

console.log("O vetor A original é:", valoresA, "\nO novo vetor B sem valores negativos e nulos é:", vetorB);
