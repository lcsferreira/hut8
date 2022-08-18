const user = {
  nome: "henrique dos santos garcia",
  cpf: "14776213931",
  telefone: "8328008258",
};

const formatCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const formatPhone = (phone) => {
  return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
};

const formatName = (name) => {
  spliitedName = name.split(" ");
  return spliitedName
    .map(([firstLetter, ...rest]) => {
      if (
        firstLetter === "d" &&
        rest.length <= 3 &&
        (rest[0] === "o" || rest[0] === "a" || rest[0] === "e")
      ) {
        return firstLetter.toLowerCase() + rest.join("");
      } else {
        return firstLetter.toUpperCase() + rest.join("");
      }
    })
    .join(" ");
};

console.log(formatName(user.nome));
console.log(formatCpf(user.cpf));
console.log(formatPhone(user.telefone));
