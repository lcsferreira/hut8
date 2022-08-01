let values = [-5, 0, -3, -4, 12];
let positives = 0;
let negatives = 0;
let evens = 0;
let odds = 0;

values.forEach((value) => {
  if (value >= 0) {
    positives++;
  } else {
    negatives++;
  }
  if (value % 2 === 0) {
    evens++;
  } else {
    odds++;
  }
});

console.log(`${positives} valor(es) positivo(s)`);
console.log(`${negatives} valor(es) negativo(s)`);
console.log(`${evens} valor(es) pares(s)`);
console.log(`${odds} valor(es) impares(s)`);
