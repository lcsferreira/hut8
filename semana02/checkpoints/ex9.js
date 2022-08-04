function generateChoice() {
  return Math.floor(Math.random() * 3);
}

function printChoice(choice, name) {
  switch (choice) {
    case 0:
      console.log(`${name}	colocou Tesoura`);
      break;
    case 1:
      console.log(`${name}	colocou Papel`);

      break;
    case 2:
      console.log(`${name}	colocou Pedra`);
      break;
    default:
      console.log("Jogada inválida");
      break;
  }
}

const user1 = {
  name: "Lucas",
  choice: generateChoice(),
};

const user2 = {
  name: "Jose",
  choice: generateChoice(),
};

//0 = tesoura, 1 = papel, 2 =pedra
function rockPaperScissorsWinner(user1, user2) {
  let winner = 0;
  printChoice(user1.choice, user1.name);
  console.log("X");
  printChoice(user2.choice, user2.name);
  if (user1.choice === user2.choice) {
    winner = 0;
  } else if (user1.choice === 0 && user2.choice === 1) {
    winner = 1;
  } else if (user1.choice === 1 && user2.choice === 2) {
    winner = 1;
  } else if (user1.choice === 2 && user2.choice === 0) {
    winner = 1;
  } else {
    winner = 2;
  }
  return winner;
}

function printWinner(winner, user1Name, user2Name) {
  switch (winner) {
    case 0:
      console.log("Empate");
      break;
    case 1:
      console.log(`Vencedor: ${user1Name}`);
      break;
    case 2:
      console.log(`Vencedor: ${user2Name}`);
      break;
    default:
      break;
  }
}

let gameWinner = rockPaperScissorsWinner(user1, user2);
printWinner(gameWinner, user1.name, user2.name);
