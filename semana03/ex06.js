const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyBy = (numbers, multiplier) => {
  const result = numbers.map((number) => number * multiplier);
  return result;
};

console.log(multiplyBy(numbers, 5));
