let totalAmount = 576;

const canSubtract = (amount, bankNote) => {
  if (amount - bankNote >= 0) {
    return true;
  } else {
    return false;
  }
};

const printBankNotes = ({
  hundreds,
  fiftys,
  twentys,
  tens,
  fives,
  twos,
  ones,
}) => {
  console.log(`${hundreds} nota(s) de R$ 100`);
  console.log(`${fiftys} nota(s) de R$ 50`);
  console.log(`${twentys} nota(s) de R$ 20`);
  console.log(`${tens} nota(s) de R$ 10`);
  console.log(`${fives} nota(s) de R$ 5`);
  console.log(`${twos} nota(s) de R$ 2`);
  console.log(`${ones} nota(s) de R$ 1`);
};

function countBankNotes(totalAmount, print) {
  let notes = {
    hundreds: 0,
    fiftys: 0,
    twentys: 0,
    tens: 0,
    fives: 0,
    twos: 0,
    ones: 0,
  };
  while (totalAmount > 0) {
    if (canSubtract(totalAmount, 100)) {
      notes.hundreds++;
      totalAmount -= 100;
    } else if (canSubtract(totalAmount, 50)) {
      notes.fiftys++;
      totalAmount -= 50;
    } else if (canSubtract(totalAmount, 20)) {
      notes.twentys++;
      totalAmount -= 20;
    } else if (canSubtract(totalAmount, 10)) {
      notes.tens++;
      totalAmount -= 10;
    } else if (canSubtract(totalAmount, 5)) {
      notes.fives++;
      totalAmount -= 5;
    } else if (canSubtract(totalAmount, 2)) {
      notes.twos++;
      totalAmount -= 2;
    } else if (canSubtract(totalAmount, 1)) {
      notes.ones++;
      totalAmount -= 1;
    }
  }

  return print(notes);
}

countBankNotes(totalAmount, printBankNotes);
