let totalAmount = 576;

function printBankNotes(hundreds, fiftys, twentys, tens, fives, twos, ones) {
  console.log(`${hundreds} nota(s) de R$ 100`);
  console.log(`${fiftys} nota(s) de R$ 50`);
  console.log(`${twentys} nota(s) de R$ 20`);
  console.log(`${tens} nota(s) de R$ 10`);
  console.log(`${fives} nota(s) de R$ 5`);
  console.log(`${twos} nota(s) de R$ 2`);
  console.log(`${ones} nota(s) de R$ 1`);
}

function checkBankNotes(totalAmount) {
  let hundreds = 0,
    fiftys = 0,
    twentys = 0,
    tens = 0,
    fives = 0,
    twos = 0,
    ones = 0;

  while (totalAmount > 0) {
    if (totalAmount - 100 >= 0) {
      totalAmount -= 100;
      hundreds++;
    } else if (totalAmount - 50 >= 0) {
      totalAmount -= 50;
      fiftys++;
    } else if (totalAmount - 20 >= 0) {
      totalAmount -= 20;
      twentys++;
    } else if (totalAmount - 10 >= 0) {
      totalAmount -= 10;
      tens++;
    } else if (totalAmount - 5 >= 0) {
      totalAmount -= 5;
      fives++;
    } else if (totalAmount - 2 >= 0) {
      totalAmount -= 2;
      twos++;
    } else if (totalAmount - 1 >= 0) {
      totalAmount -= 1;
      ones++;
    }
  }

  printBankNotes(hundreds, fiftys, twentys, tens, fives, twos, ones);
}

checkBankNotes(totalAmount);
