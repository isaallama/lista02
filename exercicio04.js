const prompt = require('prompt-sync')();
let segA = parseInt(prompt("digite o primeiro segmento: "));
let segB = parseInt(prompt("digite o segundo segmento: "));
let segC = parseInt(prompt("digite o terceiro segmento: "));

function formarTriangulo(segA, segB, segC) {
    if (segA < segB + segC && segB < segA + segC && segC < segA + segB) {
        console.log("É possível formar um triângulo")
    } else {
        console.log("Não é possível formar um triângulo")
    }
}

formarTriangulo(segA, segB, segC)

