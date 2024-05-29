const prompt = require('prompt-sync')();
let velocidade = parseInt(prompt("digite a velocidade do carro: "));

if (velocidade > 80) {
    let kmAdicionais = velocidade - 80;
    let multa = kmAdicionais * 5;

    console.log("você foi multado no valor de: " + multa, "reais");
} else {
    console.log("você não foi multado")
}
