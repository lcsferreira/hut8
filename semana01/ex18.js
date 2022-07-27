let valueOne = 10;
let valueTwo = 20;
let valueThree = 30;

function changeValues() {
  const temp = valueTwo;
  valueTwo = valueThree;
  valueThree = valueOne;
  valueOne = temp;
}

console.log(
  `Value One: ${valueOne}\n Value Two:${valueTwo}\n Value Three: ${valueThree}`
);

changeValues();

console.log(
  `Value One: ${valueOne}\n Value Two:${valueTwo}\n Value Three: ${valueThree}`
);
