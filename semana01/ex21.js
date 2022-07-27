function calculate(operation, number1, number2) {
  let result;
  switch (operation) {
    case "soma":
      result = number1 + number2;
      break;
    case "subtrai":
      result = number1 - number2;
      break;
    case "multiplica":
      result = number1 * number2;
      break;
    case "divide":
      result = number1 / number2;
      break;
    default:
      console.log("Operação inválida");
      break;
  }
  return result;
}

const result = calculate("multiplica", 4, 3);
console.log(result);
