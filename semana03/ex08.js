const numbers = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];

const findSmallerAndLarger = (numbers) => {
  let [smaller] = numbers;
  let [larger] = numbers;
  let indexSmaller = 0;
  let indexLarger = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] <= smaller
      ? ((smaller = numbers[i]), (indexSmaller = i))
      : undefined;
    numbers[i] >= larger
      ? ((larger = numbers[i]), (indexLarger = i))
      : undefined;
  }
  return [
    { smaller: smaller, index: indexSmaller },
    { larger: larger, index: indexLarger },
  ];
};

const [
  { smaller: menor, index: posicaoMenor },
  { larger: maior, index: posicaoMaior },
] = findSmallerAndLarger(numbers);

console.log(`Menor valor: ${menor}, posição: ${posicaoMenor}`);
console.log(`Menor valor: ${maior}, posição: ${posicaoMaior}`);
