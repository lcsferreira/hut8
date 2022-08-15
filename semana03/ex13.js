const storeIventory = [
  {
    cod: "0001",
    name: "Cadeira",
    stock: 20,
    price: 90.5,
    category: "Mobília",
  },
  {
    cod: "0002",
    name: "Mesa",
    stock: 10,
    price: 130.9,
    category: "Mobília",
  },
  {
    cod: "0003",
    name: "Estojo",
    stock: 37,
    price: 24.8,
    category: "Material escolar",
  },
  {
    cod: "0004",
    name: "Computador",
    stock: 23,
    price: 2400,
    category: "Tecnologia",
  },
  {
    cod: "0005",
    name: "Alexa",
    stock: 10,
    price: 675.5,
    category: "Tecnologia",
  },
];

const shoppingCart = { totalPrice: 0.0, itens: [] };

const filter = {
  byName: (name) => {
    return storeIventory.find(({ name: nameItem }) => {
      return nameItem === name;
    });
  },
  byCode: (code) => {
    return storeIventory.find(({ cod }) => {
      return cod === code;
    });
  },
  byCategory: (categ) => {
    return storeIventory.filter(({ category }) => {
      return category === categ;
    });
  },
  byPrice: (minPrice, maxPrice) => {
    return storeIventory.filter(({ price }) => {
      return price >= minPrice && price <= maxPrice;
    });
  },
};

const orderByInventoryAvailability = {
  growOrder: () => {
    return storeIventory.sort((a, b) => {
      return a.stock - b.stock;
    });
  },
  decreasingOrder: () => {
    return storeIventory
      .sort((a, b) => {
        return a.stock - b.stock;
      })
      .reverse();
  },
};

const selectItem = (quantity, productCode) => {
  const item = filter.byCode(productCode);
  if (item.stock >= quantity) {
    shoppingCart.itens.push({
      name: item.name,
      price: item.price,
      quantity: quantity,
    });
    shoppingCart.totalPrice += item.price * quantity;
  } else {
    console.log("Produto não disponível	no estoque!");
  }
  console.log(`Valor total: R$ ${checkCartTotalPrice()}`);
};

const checkCartTotalPrice = () => {
  return shoppingCart.totalPrice;
};

const paymentInstallment = (numberInstallments) => {
  return shoppingCart.totalPrice * numberInstallments * 0.03;
};

const finishBuy = (paymentMethod) => {
  switch (paymentMethod) {
    case "Boleto":
      shoppingCart.totalPrice *= 0.1;
      printFinishBuy(paymentMethod, numberInstallments);
      break;
    case "Debito":
      shoppingCart.totalPrice *= 0.15;
      printFinishBuy(paymentMethod, numberInstallments);
      break;
    case "Credito":
      let numberInstallments = 5;
      shoppingCart.totalPrice += paymentInstallment(numberInstallments);
      printFinishBuy(paymentMethod, numberInstallments);
      break;
    default:
      console.log("Metodo de pagamento invalido!");
      break;
  }
};

const printCart = () => {
  shoppingCart.itens.forEach((item) => {
    console.log(`${item.name} - R$ ${item.price} x ${item.quantity}`);
  });
};

const printFinishBuy = (paymentMethod, numberInstallments) => {
  printCart();
  if (paymentMethod === "Credito") {
    console.log(`Total a pagar: R$ ${shoppingCart.totalPrice}`);
    console.log(
      `Metodo de pagamento: ${paymentMethod} em ${numberInstallments} vezes`
    );
  } else {
    console.log(`Total a pagar: R$ ${shoppingCart.totalPrice}`);
    console.log(`Metodo de pagamento: ${paymentMethod}`);
  }
};
