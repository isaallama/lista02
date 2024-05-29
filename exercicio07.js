const prompt = require('prompt-sync')();
let tipoCarro = prompt("Digite o tipo de carro: ");
let quantidadeDias = parseFloat(prompt("Digite a quantidade de dias: "));
let kmPercorridos = parseFloat(prompt("Digite a quantidade de km percorridos: "));




if (tipoCarro != "luxo" && tipoCarro != "popular") {
    console.log("Tipo de carro inválido");
    process.exit();
}




let diaria = tipoCarro == "luxo" ? 150 : 90;
let valorKm;

if (tipoCarro == "luxo") {
    if (kmPercorridos <= 200) {
        valorKm = 0.30
    }
    else {
        valorKm = 0.25
    }
} else {
    if (kmPercorridos <= 100) {
        valorKm = 0.20
    } else {
        valorKm = 0.10
    }
}

let valor = quantidadeDias * diaria + kmPercorridos * valorKm
console.log("O valor do aluguel é: " + valor);


