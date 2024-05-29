const dados = {
    nome: 'Joaquim',
    idade: parseInt(20),
    profissão: 'Programador',
    número: parseInt(123456789),
    hobbies: 'correr, jogar',

};

function contarString(dados) {
    let contagem = 0;

    for (let propriedade in dados) {
        if (typeof dados[propriedade] === 'string') {
            contagem++;
        }
    }
    return contagem
}

console.log(contarString(dados))
