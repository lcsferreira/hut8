const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

const printPositives = () => {
  const filteredNumbers = numbers.filter((number) => {
    return number >= 0;
  });

  console.log(filteredNumbers.join(", "));
  console.log(`quantidade de positivos: ${filteredNumbers.length}`);
};

const printNegatives = () => {
  const filteredNumbers = numbers.filter((number) => {
    return number < 0;
  });

  console.log(filteredNumbers.join(", "));
  console.log(`quantidade de negativos: ${filteredNumbers.length}`);
};

const printEvens = () => {
  const filteredNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });

  console.log(filteredNumbers.join(", "));
  console.log(`quantidade de pares: ${filteredNumbers.length}`);
};

const printOdds = () => {
  const filteredNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
  });

  console.log(filteredNumbers.join(", "));
  console.log(`quantidade de impares: ${filteredNumbers.length}`);
};

printPositives();
printNegatives();
printEvens();
printOdds();
