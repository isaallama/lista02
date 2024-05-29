const prompt = require('prompt-sync')();

const dados = {
    nome: prompt("digite seu nome: "),
    idade: parseInt(prompt("digite sua idade: ")),
    profissão: prompt("digite sua profissão: "),
    número: parseInt(prompt("digite seu número detelefone: ")),
    hobbies: prompt("digite seus hobbies: ").split(", "),
    filmes: prompt("digite seus filmes favoritos: ").split(", "),
    livros: prompt("digite seus livros favoritos: ").split(", "),
    bandas: prompt("digite suas bandas ou grupos favoritos: ").split(", "),
};


function verificarArray(objeto) {
    const resultado = {};

    for (let chave in objeto) {
        if (Array.isArray(objeto[chave])) {
            resultado[chave] = objeto[chave];
        }
    }

    return resultado;
}

let novoObjeto = verificarArray(dados);
console.log(novoObjeto);
