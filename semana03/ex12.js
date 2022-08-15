const numbers = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

const multiplicaPorDez = (number) => {
  return number * 10;
};
const applyFunction = (numbers, callback) => {
  return numbers.map((number) => {
    return callback(number);
  });
};

console.log(applyFunction(numbers, multiplicaPorDez));
