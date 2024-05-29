function validarHorario(horario) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
  return regex.test(horario);
}

function formatarHorario(horario) {
  let [hh, mm, ss] = horario.split(':');
  hh = hh.padStart(2, '0');
  mm = mm.padStart(2, '0');
  ss = ss.padStart(2, '0');
  return `${hh}.${mm}.${ss}`;
}

function pegaHorarios() {
  const horarios = [];
  const prompt = require('prompt-sync')();

  for (let i = 0; i < 2; i++) {
    let horarioValido = false;
    while (!horarioValido) {
      let horario = prompt(`Digite o ${i + 1}º horário no formato HH:MM:SS: `);
      if (validarHorario(horario)) {
        horarios.push(horario);
        horarioValido = true;
      } else {
        console.log("Horário inválido. Por favor, insira um horário no formato HH:MM:SS.");
      }
    }
  }
  return horarios;
}

function exibirHorarios(horarios) {
  console.log("Os horários digitados foram:");
  horarios.forEach(horario => {
    console.log(formatarHorario(horario));
  });
}


const horarios = pegaHorarios();
exibirHorarios(horarios);
const prompt = require('prompt-sync')();
