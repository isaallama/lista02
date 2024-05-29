function fibonacci() {
    let n1 = 0;
    let n2 = 1;
    let n = 0;
    let numbers = [];

    for (i = 0; i < 10; i++) {
        n = n1 + n2;
        numbers.push(n)
        n2 = n1;
        n1 = n;

    }

    return numbers
}

n = fibonacci(10);

console.log(`Os dez primeiros elementos da sequência de Fibonacci são: ${n}`)
