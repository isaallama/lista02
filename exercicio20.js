const readline = require("readline");
const fs = require("fs");

const linha = readline.createInterface({
  input: fs.createReadStream("mod02/lista02/pessoas.csv")
});


let primeiraLinha = true;

linha.on("line", (data) => {

  if (primeiraLinha) {
    primeiraLinha = false;
    return;
  }

  let csv = data.split(";");
  console.log(`Número de Matrícula: ${csv[0]}, Nome: ${csv[1]}, Salário Bruto: ${csv[2]}, Dedução INSS: ${(csv[2] * 0.12).toFixed(2)}, Salário Líquido: ${(csv[2] - (csv[2] * 0.12)).toFixed(2)}`);

})
