function lerGabarito() {
    let gabarito = [];
    while (gabarito.length < 13) {
        let numero = Math.floor(Math.random() * 100);
        if (!gabarito.includes(numero)) {
            gabarito.push(numero);
        }
    }
    return gabarito;
}

function lerRespostas() {
    let respostas = [];
    for (let i = 0; i < 100; i++) {
        let resposta = [];
        while (resposta.length < 13) {
            let numero = Math.floor(Math.random() * 100);
            if (!resposta.includes(numero)) {
                resposta.push(numero);
            }
        }
        respostas.push({
            numeroCartao: i + 1,
            resposta: resposta
        });
    }
    return respostas;
}

function verificarGabarito(gabarito, respostas) {
    let resultados = [];

    for (let i = 0; i < respostas.length; i++) {
        let acertos = 0;
        for (let j = 0; j < gabarito.length; j++) {
            if (respostas[i].resposta[j] === gabarito[j]) {
                acertos++;
            }
        }
        resultados.push({
            numeroCartao: respostas[i].numeroCartao,
            resposta: respostas[i].resposta,
            acertos: acertos
        });
    }

    return resultados;
}

let gabarito = lerGabarito();
let respostas = lerRespostas();
let resultados = verificarGabarito(gabarito, respostas);

resultados.forEach(resultado => {
    console.log(`Número do Cartão: ${resultado.numeroCartao}, Respostas do Jogador: ${resultado.resposta}, Número de Acertos: ${resultado.acertos}`);
    if (resultado.acertos === 13) {
        console.log("Parabéns, tu foi o GANHADOR");
    }
});

console.log("Os números sorteados são:", gabarito);
