function pesoIdeal() {
    const prompt = require('prompt-sync')();
    let peso = prompt("digite seu peso: ");
    let altura = prompt("digite sua altura: ");
    let genero = prompt("digite seu gênero: ");

    if (genero == "masculino") {
        let pesoIdeal = (72.7 * altura) - 58;
        console.log(`seu peso ideal é: ${pesoIdeal.toFixed(2)}kg`);
    } else {
        let pesoIdeal = (62.1 * altura) - 44.7;
        console.log(`seu peso ideal é: ${pesoIdeal.toFixed(2)}kg`);
    }

    return
}

pesoIdeal()
