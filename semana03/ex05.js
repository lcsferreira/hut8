const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

const printQuantity = (count) => {
  console.log(`Positivos: ${count.positives}`);
  console.log(`Negativos: ${count.negatives}`);
  console.log(`Pares: ${count.evens}`);
  console.log(`Impares: ${count.odds}`);
};
const printPostives = (numbers) => {
  console.log("Positivos ------");
  numbers.forEach((number) => {
    if (number >= 0) {
      console.log(number);
    }
  });
};

const printNegatives = (numbers) => {
  console.log("Negativos ------");
  numbers.forEach((number) => {
    if (number < 0) {
      console.log(number);
    }
  });
};

const printEvens = (numbers) => {
  console.log("Pares ------");
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(number);
    }
  });
};

const printOdds = (numbers) => {
  console.log("Impares ------");
  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      console.log(number);
    }
  });
};

const countPositivesNegativesEvensOdds = (numbers) => {
  const count = {
    positives: 0,
    negatives: 0,
    evens: 0,
    odds: 0,
  };
  numbers.forEach((number) => {
    number >= 0 ? count.positives++ : count.negatives++;
    number % 2 === 0 ? count.evens++ : count.odds++;
  });
  printQuantity(count);
};

printPostives(numbers);
printNegatives(numbers);
printEvens(numbers);
printOdds(numbers);
countPositivesNegativesEvensOdds(numbers);
