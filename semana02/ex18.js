let shoppingCart = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];

let totalPrice = 0;

function calcTotal(amount, price) {
  return amount * price;
}

shoppingCart.forEach((item) => {
  totalPrice += calcTotal(item.quantidade, item.valor);
});

console.log(`Valor total: R$ ${totalPrice}`);
