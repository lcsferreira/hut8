const printRow = (value1, value2) => {
  const result = value1 * value2;
  console.log(`${value1} X ${value2} = ${result}`);
};

const multTable = (value, limit) => {
  for (let i = 1; i <= limit; i++) {
    printRow(value, i);
  }
};

multTable(3, 5);
