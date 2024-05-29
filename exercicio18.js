function infoFuncionario() {
    const prompt = require('prompt-sync')();

    let nome = prompt("digite seu nome: ");
    let cargo = prompt("digite seu cargo: ");
    let salario = parseFloat(prompt("digite seu salario: "));

    console.log(`Segue os dados do funcionário: nome: ${nome}, cargo: ${cargo}, salário: ${salario}`);


}

infoFuncionario()
