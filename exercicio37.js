function vetorG(tamanho) {
    let alternativas = ['a', 'b', 'c', 'd', 'e'];
    let gabarito = '';

    for (let i = 0; i < tamanho; i++) {
        let opção = Math.floor(Math.random() * alternativas.length);
        gabarito += alternativas[opção];
    }

    return gabarito;
}

function vetorR(tamanho, alternativas) {
    let respostas = [];

    for (let i = 0; i < 50; i++) {
        let resposta = [];
        while (resposta.length < tamanho) {
            let opção = Math.floor(Math.random() * alternativas.length);
            resposta.push(alternativas[opção]);
        }
        respostas.push(resposta);
    }

    return respostas;
}

function verificarGabarito(gabarito, respostas) {
    let resultados = [];

    for (let i = 0; i < respostas.length; i++) {
        let acertos = 0;
        for (let j = 0; j < gabarito.length; j++) {
            if (respostas[i][j] === gabarito[j]) {
                acertos++;
            }
        }
        resultados.push({ resposta: respostas[i].join(''), acertos: acertos });
    }

    return resultados;
}

let gabarito = vetorG(20);
let respostas = vetorR(20, ['a', 'b', 'c', 'd', 'e']);
let resultados = verificarGabarito(gabarito, respostas);

resultados.forEach(resultado => {
    console.log(`Respostas do Aluno: ${resultado.resposta}, Número de Acertos: ${resultado.acertos}`);
    if (resultado.acertos >= 12) {
        console.log("Parabéns, tu foi aprovado");
    } else {
        console.log("Tu foi reprovado");
    }
});

console.log("O gabarito é:", gabarito);
