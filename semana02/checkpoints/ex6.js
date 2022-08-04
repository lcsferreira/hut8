let numbers = [6, 21, 9, 2, 50, 98, 1];

function getBiggestNumber(numbers) {
  let biggest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= biggest) {
      biggest = numbers[i];
    }
  }
  return biggest;
}

let result = getBiggestNumber(numbers);
console.log(result);

//ou usando funções de js
function getBiggestNumberJS(numbers) {
  let biggest = numbers[0];
  numbers.forEach((number) => {
    if (number >= biggest) {
      biggest = number;
    }
  });
  return biggest;
}

let resultJS = getBiggestNumberJS(numbers);
console.log(resultJS);
