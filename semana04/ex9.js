const shoppingCart = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];

const calcTotal = () => {
  let total = 0;
  shoppingCart.forEach((item) => {
    total += item.valor * item.quantidade;
  });
  return total;
};

console.log(calcTotal());
