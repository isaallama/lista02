let indicados2017 = {
    melhorFilme: ['A Chegada', 'Até o Último Homem', 'Estrelas Além do Tempo', 'Lion: Uma Jornada para Célia', 'Moonlight: Sob a Luz do Luar', 'Um Limite Entre Nós', 'A Qualquer Custo', 'La La Land: Cantando Estações', 'Manchester à Beira-Mar'],
    melhorDiretor: ['A Chegada', 'Até o Último Homem', 'La La Land: Cantando Estacoes', 'Manchester à Beira-Mar', 'Moonlight: Sob a Luz do Luar'],
    melhorAtriz: ['Elle', 'Loving', 'Jackie', 'La La Land: Cantando Estacoes', 'Florence: Quem é Essa Mulher?'],
    melhorAtor: ['Manchester à Beira-Mar', 'Até o Último Homem', 'La La Land: Cantando Estacoes', 'Capitão Fantástico', 'Um Limite Entre Nós'],
}


function contarOcorrencias(indicados) {
    let ocorrencias = {};
    for (let categoria in indicados) {
        for (let i = 0; i < indicados[categoria].length; i++) {
            let item = indicados[categoria][i];
            if (ocorrencias[item[i]]) {
                ocorrencias[item[i]]++;
            } else {
                ocorrencias[item[i]] = 1;
            }
        }

    }
    return ocorrencias;
}

console.log(contarOcorrencias(indicados2017));
