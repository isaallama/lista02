const objeto1 = {
    indicado01: 'Capitão Fantástico',
    indicado02: 'Estrelas Além do Tempo',
    indicado03: 'A Chegada',
    indicado04: 'Lion: Uma Jornada para Casa',
    indicado05: 'A Qualquer Custo',

}


const objeto2 = {
    vencedor01: 'La la land: Cantando estações',
    vencedor02: 'Moonlight: Sob a luz do luar',
    vencedor03: 'Manchester à beira-mar',
    vencedor04: 'Um Limite Entre Nós',
    vencendor05: 'Os Capacetes Brancos',


}

function interseccao(objeto1, objeto2) {
    let novoObjeto = {};

    for (let chave in objeto1) {
        novoObjeto[chave] = objeto1[chave];
    }
    for (let chave in objeto2) {
        novoObjeto[chave] = objeto2[chave];
    }

    return novoObjeto;
}

let interseccaoObjetos = interseccao(objeto1, objeto2);
console.log(interseccaoObjetos);
