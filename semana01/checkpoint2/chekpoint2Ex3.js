let paymentMethod = "4";
let productPrice = 90;
let finalPrice;

switch (paymentMethod) {
  case "1":
    finalPrice = productPrice - productPrice * 0.1;
    console.log(`Total a pagar: R$ ${finalPrice}`);
    break;
  case "2":
    finalPrice = productPrice - productPrice * 0.15;
    console.log(`Total a pagar: R$ ${finalPrice}`);
    break;
  case "3":
    finalPrice = productPrice;
    console.log(`Total a pagar: R$ ${finalPrice}`);
    break;
  case "4":
    finalPrice = productPrice + productPrice * (0.1 * 3);
    console.log(`Total a pagar: R$ ${finalPrice}`);
    break;
  default:
    console.log("Método de pagamento inválido");
    break;
}
