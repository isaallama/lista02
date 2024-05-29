const prompt = require('prompt-sync')();

const pessoa = {
    nome: prompt('digite seu nome: '),
    idade: prompt('digite sua idade: '),
}

console.log("idade:", pessoa.idade)

pessoa.email = prompt('digite seu email: ')

console.log("pessoa", pessoa)
