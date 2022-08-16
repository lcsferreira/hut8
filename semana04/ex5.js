const numbers = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];

numbers.map((number, i) => {
  if (number % 2 === 0) {
    numbers[i] = "X";
  }
});

console.log(numbers);
