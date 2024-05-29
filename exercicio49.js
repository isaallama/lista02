
const transações = [
    { id: 1, valor: 100, data: '01-01-2024', categoria: 'Alimentação' },
    { id: 2, valor: 80, data: '08-01-2024', categoria: 'Alimentação' },
    { id: 3, valor: 300, data: '09-03-2024', categoria: 'Serviços' },
    { id: 4, valor: 100, data: '15-03-2024', categoria: 'Serviços' },
    { id: 5, valor: 500, data: '01-04-2024', categoria: 'Mercado' },
    { id: 6, valor: 600, data: '10-04--2024', categoria: 'Carro' },
    { id: 7, valor: 700, data: '27-05--2024', categoria: 'Fatura' },
    { id: 8, valor: 90, data: '30-05--2024', categoria: 'Alimentação' },
    { id: 9, valor: 900, data: '01-09-2024', categoria: 'Fatura' },
    { id: 10, valor: 1000, data: '01-10-2024', categoria: 'Fatura' },
    { id: 11, valor: 500, data: '16-11-2024', categoria: 'Mercado' },
    { id: 12, valor: 200, data: '20-12-2024', categoria: 'Carro' }
];

function retornaObjeto(transações) {
    let categorias = {};

    for (let dados of transações) {
        if (!categorias[dados.categoria]) {
            categorias[dados.categoria] = 0
        }
        categorias[dados.categoria] += dados.valor
    }

    return categorias
}
let valorTotal = (retornaObjeto(transações))
console.log(valorTotal)
