const numbers = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127];

const findNumber = 9;

if (numbers.find((number) => number === findNumber) === undefined) {
  console.log("ERROR: Numero nao encontrado");
} else {
  console.log("Valor encontrado no array");
}
