const prompt = require('prompt-sync')();

let hoteisEncontrados = [
  { id: 1, nome: "Hotel 1", cidade: "Porto Alegre", quartosTotais: 100, quartosDisponiveis: 60 },
  { id: 2, nome: "Hotel 2", cidade: "Porto Alegre", quartosTotais: 120, quartosDisponiveis: 20 },
  { id: 3, nome: "Hotel 3", cidade: "Canoas", quartosTotais: 110, quartosDisponiveis: 0 },
  { id: 4, nome: "Hotel 4", cidade: "Canoas", quartosTotais: 100, quartosDisponiveis: 10 },
  { id: 5, nome: "Hotel 5", cidade: "Porto Alegre", quartosTotais: 100, quartosDisponiveis: 1 },
  { id: 6, nome: "Hotel 6", cidade: "Guaiba", quartosTotais: 100, quartosDisponiveis: 0 }
];

let reservasRealizadas = [
  { idHotel: 1, idReserva: 1, nomeCliente: "Joaquim", quartosReservados: 2 },
  { idHotel: 2, idReserva: 2, nomeCliente: "Maria", quartosReservados: 3 },
  { idHotel: 3, idReserva: 3, nomeCliente: "Jose", quartosReservados: 1 }
];

function novoIdHotel(hoteisEncontrados) {
  return hoteisEncontrados.length + 1
}
function novoIdReserva(reservasRealizadas) {
  return reservasRealizadas.length + 1
}

function adicionarHotel(hoteisEncontrados) {
  let inserirDados = prompt("Você deseja adicionar um hotel? (sim/nao): ").toLowerCase();

  while (inserirDados === "sim") {
    let hotel = {};

    console.log("Insira aqui os dados para adicionar um novo hotel: ");
    hotel.id = novoIdHotel(hoteisEncontrados);
    hotel.nome = prompt("Digite o nome do hotel: ");
    hotel.cidade = prompt("Digite a cidade do hotel: ");
    hotel.quartosTotais = parseInt(prompt("Digite o total de quartos do hotel: "));
    hotel.quartosDisponiveis = hotel.quartosTotais

    if (hotel.id && hotel.nome && hotel.cidade && hotel.quartosTotais && hotel.quartosDisponiveis) {
      hoteisEncontrados.push(hotel);
      console.log("Hotel adicionado com sucesso.");
    } else {
      console.log("Preencha todos os campos do novo hotel.");
    }

    inserirDados = prompt("Você deseja adicionar outro hotel? (sim/nao): ").toLowerCase();
  }
}

function hoteisPorCidade(hoteisEncontrados) {
  let encontrar = prompt("Você deseja encontrar hotéis por cidade? (sim/nao): ").toLowerCase();

  while (encontrar === "sim") {
    let hoteisDisponiveis = [];

    let hotelPorCidade = prompt("Digite o nome da cidade: ");

    for (let i = 0; i < hoteisEncontrados.length; i++) {
      if (hoteisEncontrados[i].cidade.toLowerCase() === hotelPorCidade.toLowerCase()) {
        hoteisDisponiveis.push(hoteisEncontrados[i]);
      }
    }

    if (hoteisDisponiveis.length === 0) {
      console.log("Nenhum hotel encontrado nesta cidade.");
    } else {
      console.log("Hotéis encontrados em", hotelPorCidade + ":");
      console.log(hoteisDisponiveis);
    }

    return hoteisDisponiveis;
  }

}

function façaReserva(hoteisDisponiveis, reservasRealizadas) {
  let reservar = prompt("Você deseja fazer uma reserva? (sim/nao): ").toLowerCase();

  while (reservar === "sim") {

    console.log("Insira seus dados para realizarmos uma reserva:");

    let reserva = {};

    reserva.idHotel = parseInt(prompt("Digite o id do hotel: "));
    reserva.idReserva = novoIdReserva(reservasRealizadas);
    reserva.quartosReservados = parseInt(prompt("Digite a quantidade de quartos que deseja reservar: "));
    reserva.nomeCliente = prompt("Digite o nome do cliente: ");

    if (reserva.idHotel && reserva.quartosReservados && reserva.nomeCliente) {

      let hotelExistente = hoteisDisponiveis.find(hotel => hotel.id === reserva.idHotel);

      if (hotelExistente) {
        if (hotelExistente.quartosDisponiveis >= reserva.quartosReservados) {
          hotelExistente.quartosDisponiveis -= reserva.quartosReservados;


          reservasRealizadas.push(reserva);
          console.log("Reserva efetuada com sucesso:", reserva);

        } else {
          console.log("Quartos indisponíveis para esta reserva.");
        }
      } else {
        console.log("Hotel não encontrado.");
      }

    } else {
      console.log("Preencha todos os campos da reserva.");
    }

    reservar = prompt("Você deseja fazer uma reserva? (sim/nao): ").toLowerCase();
  }
}

function canceleReserva(hoteisEncontrados, reservasRealizadas) {
  let cancelar = prompt("Você deseja cancelar uma reserva? (sim/nao): ").toLowerCase();

  while (cancelar === "sim") {
    totalReservas(reservasRealizadas);

    let idReserva = parseInt(prompt("Digite o id da reserva que quer cancelar: "));

    let reservaExistente = reservasRealizadas.find(reserva => reserva.idReserva === idReserva);

    if (reservaExistente) {
      let hotelId = reservaExistente.idHotel;
      let hotelExistente = hoteisEncontrados.find(hotel => hotel.id === hotelId);
      hotelExistente.quartosDisponiveis += reservaExistente.quartosReservados;

      let reservaIndex = reservasRealizadas.findIndex(reserva => reserva.idReserva === idReserva);
      reservasRealizadas.splice(reservaIndex, 1);

      console.log("Reserva cancelada com sucesso:", idReserva);
    } else {
      console.log("Reserva não encontrada.");
    }

    cancelar = prompt("Você deseja cancelar outra reserva? (sim/nao): ").toLowerCase();
  }
}

function totalReservas(reservasRealizadas) {
  reservasRealizadas.forEach(reserva => {
    console.log(`ID da Reserva: ${reserva.idReserva}, ID do Hotel: ${reserva.idHotel}, Nome do Cliente: ${reserva.nomeCliente}, Quartos Reservados: ${reserva.quartosReservados}`);
  });
}

function totalHoteis(hoteisEncontrados) {
  let totalHoteis = prompt("Você deseja ver todos os hoteis disponíveis? (sim/nao): ").toLowerCase();
  if (totalHoteis === "sim") {
    console.log("Hoteis disponíveis:");
    hoteisEncontrados.forEach(hotel => {
      console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Cidade: ${hotel.cidade}, Quartos Totais: ${hotel.quartosTotais}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
    });
  } else {
    console.log("Obrigada por procurar um hotel conosco!");
  }
}

adicionarHotel(hoteisEncontrados);

let hoteisDisponiveis = hoteisPorCidade(hoteisEncontrados);
façaReserva(hoteisDisponiveis, reservasRealizadas);
canceleReserva(hoteisEncontrados, reservasRealizadas);

totalReservas(reservasRealizadas);
totalHoteis(hoteisEncontrados);
