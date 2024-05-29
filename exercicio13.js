const tamanho = 15
const fibonacci = new Array(tamanho)

for (let i = 0; i < tamanho; i++) {
    if (i < 2) {
        fibonacci[i] = i
    } else {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }

    console.log(fibonacci[i])
}
