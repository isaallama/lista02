const prompt = require('prompt-sync')();

function infoPopulacional() {

    let somaFilhos = 0;
    let somaSalarios = 0;
    let maiorSalario = -Infinity;
    let salarioMenor350 = 0;
    let numeroHabitantes = 0;
    let continuar;

    do {
        let salario = parseFloat(prompt("digite o salário: "));
        let filhos = parseInt(prompt("digite a quantidade de filhos: "));

        if (!isNaN(salario) && !isNaN(filhos)) {
            console.log(`O salário é de: ${salario}, O número de filhos é: ${filhos}`);

            somaFilhos += filhos;
            somaSalarios += salario;

            numeroHabitantes++;

            if (salario < 350) {
                salarioMenor350++;
            }

            if (salario > maiorSalario) {
                maiorSalario = salario;
            }


        } else {
            console.log("Informação incorreta. Tente novamente.");
        }

        continuar = prompt("Continuar (s/n)? ");

    } while (continuar === "s");


    const mediaSalarial = somaSalarios / numeroHabitantes;
    const mediaFilhos = somaFilhos / numeroHabitantes;
    const percentualSalarioAte350 = (salarioMenor350 / numeroHabitantes) * 100;

    console.log(`A média dos salários é: R$ ${mediaSalarial.toFixed(2)}`);
    console.log(`A média do número de filhos é: ${mediaFilhos.toFixed(2)}`);
    console.log(`O maior salário é: R$ ${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalarioAte350.toFixed(2)}%`);

}


infoPopulacional();
