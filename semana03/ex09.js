const cart = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];

const calcPriceItem = ([item]) => {
  return item.quantidade * item.valor;
};

const calcTotal = (cart) => {
  let total = 0;
  const tamanhoCarrinho = cart.length;
  for (let i = 0; i < tamanhoCarrinho; i++) {
    total += calcPriceItem(cart);
    cart.shift();
  }
  return total;
};

const totalPagar = calcTotal(cart);
console.log(`Valor total: R$ ${totalPagar}`);
