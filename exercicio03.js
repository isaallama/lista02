const prompt = require('prompt-sync')();
let distância = parseInt(prompt("digite a distância desejada: "));

if (distância <= 200) {
    let valor = distância * 0.50;
    console.log("O valor da passagem é: " + valor);
} else {
    let valor = (distância) * 0.45;
    console.log("O valor da passagem é: " + valor);
} 
