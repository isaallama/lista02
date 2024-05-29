function lerElementos(tamanho) {
    let elementos = [];

    for (let i = 0; i < tamanho; i++) {
        let elemento = Math.floor(Math.random() * 100);
        elementos.push(elemento);
    }

    return elementos;
}

function apostas(tamanho, elementos) {
    let respostas = [];

    for (let i = 0; i < 50; i++) {
        let resposta = new Set();
        while (resposta.size < tamanho) {
            let opção = Math.floor(Math.random() * elementos.length);
            resposta.add(elementos[opção]);
        }
        respostas.push(Array.from(resposta));
    }

    return respostas;
}


function compararApostas(gabarito, respostas) {
    let resultados = [];

    for (let i = 0; i < respostas.length; i++) {
        let acertos = 0;
        for (let j = 0; j < gabarito.length; j++) {
            if (respostas[i][j] === gabarito[j]) {
                acertos++;
            }
        }
        resultados.push({ resposta: respostas[i].join(','), acertos: acertos });
    }

    return resultados;
}

let resultado = lerElementos(5);
let apostaJogadores = apostas(5, resultado);
let resultadoApostas = compararApostas(resultado, apostaJogadores);

console.log(`O resultado oficial da Loto é: ${resultado.join(',')}.`);

resultadoApostas.forEach(each => {
    console.log(`Aposta do Jogador: ${each.resposta}, Número de acertos: ${each.acertos}`);
    if (each.acertos === 5) {
        console.log("Parabéns, você foi o GANHADOR!");
    }
});
