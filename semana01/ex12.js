let fullName = "Lucas Ferreira";
let employee = false;
let teacher = false;

if (teacher && employee) {
  console.log(
    `Parabéns ${fullName}! Você tem acesso a nossa linha de crédito especial!`
  );
} else if (!employee && teacher) {
  console.log(
    `${fullName} infelzimente você não tem uma linha de crédito disponível`
  );
} else if (!teacher && employee) {
  console.log(
    `${fullName}, você tem acesso a nossa linha de crédito para servidores`
  );
} else {
  console.log("Ops! parece que você não está na base dados!");
}
