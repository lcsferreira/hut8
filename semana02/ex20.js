let user = {
  nome: "Analu dos santos baptista",
  cpf: "14776213931",
  telefone: "8328008258",
};

function formatCpf(cpf) {
  let formattedCpf;
  formattedCpf =
    cpf.slice(0, 3) +
    "." +
    cpf.slice(3, 6) +
    "." +
    cpf.slice(6, 9) +
    "-" +
    cpf.slice(10, 11);
  return formattedCpf;
}

function formatPhone(phone) {
  let formattedPhone;
  formattedPhone =
    "(" +
    phone.slice(0, 2) +
    ") " +
    phone.slice(2, 7) +
    "-" +
    phone.slice(7, 11);
  return formattedPhone;
}

console.log(formatCpf(user.cpf));
console.log(formatPhone(user.telefone));
