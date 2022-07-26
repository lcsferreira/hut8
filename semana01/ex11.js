let side1 = 2;
let side2 = 1;
let side3 = 5;

if (side1 === side2 && side2 === side3) {
  console.log("Triangulo Equilatero");
} else if (side1 !== side2 && (side2 === side3 || side3 === side1)) {
  console.log("Triangulo Isoceles");
} else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
  console.log("Triangulo Escaleno");
}
