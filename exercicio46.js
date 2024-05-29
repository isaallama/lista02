let vendasLivros = [
    {
        nome: 'O Panteão Egípicio',
        valor: 43.75,
        vendedor: 'Cássio'
    },
    {
        nome: 'Vidas Secas',
        valor: 43.52,
        vendedor: 'Roberta'
    },
    {
        nome: 'A Máquina do Tempo',
        valor: 45.00,
        vendedor: 'Cássio'
    },
    {
        nome: 'Box Trilogia O Senhor dos Anéis',
        valor: 152.98,
        vendedor: 'Lurdes'
    },
    {
        nome: 'MacAco - Uma Jornada Para o Oeste',
        valor: 23.90,
        vendedor: 'Cássio'
    },
    {
        nome: 'Senhor das Moscas',
        valor: 42.11,
        vendedor: 'Roberta'
    },
    {
        nome: 'O Iluminado',
        valor: 54.88,
        vendedor: 'Roberta'
    },
    {
        nome: 'Cosmos',
        valor: 60.00,
        vendedor: 'Lurdes'
    },
    {
        nome: 'Memórias Póstumas de Brás Cubas',
        valor: 42.00,
        vendedor: 'Roberta'
    },
    {
        nome: 'Fragementos do Terror',
        valor: 59.00,
        vendedor: 'Lurdes'
    }

];

function VendasPorVendedor(vendasLivros) {
    let totalPorVendedor = {};
    for (let i = 0; i < vendasLivros.length; i++) {
        let vendedor = vendasLivros[i].vendedor;
        if (totalPorVendedor[vendedor]) {
            totalPorVendedor[vendedor]++;
        } else {
            totalPorVendedor[vendedor] = 1;
        }
    }
    return totalPorVendedor;
}


let vendaTotal = VendasPorVendedor(vendasLivros);
console.log(vendaTotal);
