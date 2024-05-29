const prompt = require('prompt-sync')();
let escolhaJogador = prompt("Escolha pedra, papel ou tesoura: ");

let opçõesComputador = {
    1: "papel",
    2: "pedra",
    3: "tesoura",
}

let escolhaComputador = opçõesComputador[Math.floor(Math.random() * 3) + 1];

if (escolhaJogador === escolhaComputador) {
    console.log("O computador escolheu a mesma opção! Resultado: empate");

} else if (escolhaJogador === "pedra" && escolhaComputador === "tesoura") {
    console.log("O computador escolheu papel! Resultado: jogador venceu");

} else if (escolhaJogador === "tesoura" && escolhaComputador === "papel") {
    console.log("O computador escolheu papel! Resultado: jogador venceu");

} else if (escolhaJogador === "papel" && escolhaComputador === "pedra") {
    console.log("O computador escolheu pedra! Resultado: jogador venceu");

} else {
    console.log(`O computador escolheu ${escolhaComputador}! Resultado: jogador perdeu`);
}

