function mathOperation(operation) {
  if (operation === "soma") {
    return function soma(value1) {
      return function (value2) {
        return value1 + value2;
      };
    };
  } else if (operation === "subtrai") {
    return function subtrai(value1) {
      return function (value2) {
        return value1 - value2;
      };
    };
  } else if (operation === "multiplica") {
    return function multiplica(value1) {
      return function (value2) {
        return value1 * value2;
      };
    };
  } else if (operation === "divide") {
    return function divide(value1) {
      return function (value2) {
        return value1 / value2;
      };
    };
  } else {
    console.log("Operacao invalida");
    return function invalid(value1) {
      return function (value2) {
        return 0;
      };
    };
  }
}

console.log(mathOperation("subtrai")(10)(4));
