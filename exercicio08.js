const prompt = require('prompt-sync')();
let contadorHoras = parseFloat(prompt("Digite a quantidade de horas de atividade física realizada por mês: "));
let pontos;

if (contadorHoras < 10) {
    pontos = 2;
} else if (contadorHoras >= 10 && contadorHoras <= 20) {
    pontos = 5;
} else {
    pontos = 10;
}

let valorPago = pontos * 0.05 * contadorHoras;
console.log("valor a ser pago:", valorPago, "reais")

