const peça = {
    quantidade: 10,
    valor: 500,
    diâmetro: 10,
    comprimento: 50,
}

function transformaObjeto(peça) {
    let novosValores = {};

    for (let propriedade in peça) {

        switch (propriedade) {
            case 'quantidade':
                novosValores[propriedade] = peça[propriedade] * 10
                break
            case 'valor':
                novosValores[propriedade] = peça[propriedade] * 10
                break
            case 'diâmetro':
                novosValores[propriedade] = peça[propriedade] * 5
                break
            case 'comprimento':
                novosValores[propriedade] = peça[propriedade] * 4
                break
        }

    }
    return novosValores
}

let novaPeça = transformaObjeto(peça)

console.log(novaPeça)
