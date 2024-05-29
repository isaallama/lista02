const prompt = require('prompt-sync')();
let mediaCigarros = parseInt(prompt('digite a media de cigarros por dia: '));
let anosFumados = parseInt(prompt('digite a quantidade de anos fumados: '));

let cigarrosFumados = mediaCigarros * anosFumados * 365;
let diasPerdidos = cigarrosFumados * 10 / (60 * 24);

diasPerdidos = parseInt(diasPerdidos);

console.log(`foram perdidos ${diasPerdidos} dias de vida`)

