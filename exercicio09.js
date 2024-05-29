const prompt = require('prompt-sync')();
let gênero = prompt("Digite o gênero: ");
let funcionariosPorGênero = parseInt(prompt("Digite o número de funcionários por gênero: "));
let salário = parseFloat(prompt("Digite o valor do salário: "));


function salárioPorGênero(salário, gênero) {
    if (gênero == "masculino") {
        return salário

    } else if (gênero == "feminino") {
        return salário

    } else {
        return "gênero inválido"
    }


}

let continuar = prompt("Continuar (s/n)? ");
if (continuar !== "s") {
    console.log("Fim");
    process.exit();
}

let salárioTotal = salário * funcionariosPorGênero;
console.log("O salário total do gênero", gênero, "é", salárioTotal, "reais");

