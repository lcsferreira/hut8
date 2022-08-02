let numbers = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
let smaller = numbers[0];
let indexSmaller = 0;

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] <= smaller) {
    smaller = numbers[i];
    indexSmaller = i;
  }
}

console.log(`Menor valor: ${smaller}`);
console.log(`Posição: ${indexSmaller}`);
