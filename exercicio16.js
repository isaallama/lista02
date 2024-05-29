function selecionaValores(tamanho) {
    let valores = new Array()
    for (let i = 0; i < tamanho; i++) {
        numeroAleatorio = Math.floor(Math.random() * 100)
        valores.push(numeroAleatorio)
    }

    return valores
}

let tamanho = 20
let valores = selecionaValores(tamanho)
console.log(valores)

valores.sort((a, b) => a - b)
console.log(valores)
