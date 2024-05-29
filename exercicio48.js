const inventárioLojaA = [
    {
        nome: 'Caneta',
        estoque: 10
    },
    {
        nome: 'Caderno',
        estoque: 15
    },
    {
        nome: 'Lapis',
        estoque: 5
    },
    {
        nome: 'Mochila',
        estoque: 20
    },
    {
        nome: 'Livro de Colorir',
        estoque: 10
    },
    {
        nome: 'Fichário',
        estoque: 15
    },
    {
        nome: 'Lancheira',
        estoque: 20
    }

]

const inventárioLojaB = [
    {
        nome: 'Caneta',
        estoque: 60
    },
    {
        nome: 'Caderno',
        estoque: 15
    },
    {
        nome: 'Lapis',
        estoque: 5
    },
    {
        nome: 'Mochila',
        estoque: 20
    },
    {
        nome: 'Livro Didático',
        estoque: 10
    },

    {
        nome: 'Lapis de Colorir',
        estoque: 50
    },

]

function combinaInventários(inventárioLojaA, inventárioLojaB) {
    let inventário = {};

    for (let item of inventárioLojaA) {
        inventário[item.nome] = item.estoque;
    }

    for (let item of inventárioLojaB) {
        if (!inventário[item.nome]) {
            inventário[item.nome] = item.estoque;
        } else {
            inventário[item.nome] += item.estoque;
        }
    }

    return inventário

}

let inventários = combinaInventários(inventárioLojaA, inventárioLojaB)
console.log(inventários)
