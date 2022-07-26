let number1 = 20;
let number2 = 10;
let number3 = 3;

if (number1 >= number2 && number1 >= number3) {
  if (number2 >= number3) {
    console.log(number1 + number2);
  } else {
    console.log(number1 + number3);
  }
} else {
  console.log(number2 + number3);
}
