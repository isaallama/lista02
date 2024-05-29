function pegaNomes() {
    let nomes = new Array();
    let idades = new Array();

    prompt = require('prompt-sync')();

    for (let i = 0; i < 9; i++) {

        let digiteNomes = prompt(`digite o ${i + 1}º nome: `);
        let digiteIdade = parseInt(prompt(`digite a idade de ${digiteNomes}: `));

        nomes.push(digiteNomes);
        idades.push(digiteIdade);
    }

    return { nomes, idades }
}

function menoresIdades(nomes, idades) {
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] < 18) {
            console.log(`${nomes[i]} é menor de idade e tem ${idades[i]} anos`);
        }
    }
}

let nomesIdades = pegaNomes();
let menores = menoresIdades(nomesIdades.nomes, nomesIdades.idades);
