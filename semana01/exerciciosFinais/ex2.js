function checkCategory(age) {
  if (age >= 5 && age <= 7) {
    return "Infantil A";
  } else if (age >= 8 && age <= 10) {
    return "Infantil B";
  } else if (age >= 11 && age <= 13) {
    return "Juvenil A";
  } else if (age >= 14 && age <= 17) {
    return "Juvenil B";
  } else if (age >= 18) {
    return "Adulto";
  } else {
    return "Idade não permitida";
  }
}

let age = 13;
console.log(checkCategory(age));
