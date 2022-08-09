const employees = [
  { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
  { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
  { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
  { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
  { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
  { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
  { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
];

const printEmployees = (employees) => {
  employees.forEach((employee) => {
    console.log(`Nome: ${employee.nome} - ${employee.idade} anos`);
    console.log(
      `Nivel: ${employee.senioridade} - Recebe: R$ ${employee.salario}`
    );
  });
};
function compareBySeniority(a, b) {
  if (
    a.senioridade === "senior" &&
    (b.senioridade === "junior" ||
      b.senioridade === "pleno" ||
      b.senioridade === "estagio")
  ) {
    return 1;
  } else if (
    a.senioridade === "pleno" &&
    (b.senioridade === "junior" || b.senioridade === "estagio")
  ) {
    return 1;
  } else if (a.senioridade === "junior" && b.senioridade === "estagio") {
    return 1;
  } else if (a.senioridade === b.senioridade) {
    return 0;
  } else {
    return -1;
  }
}

const growOrderByAge = (employees) => {
  console.log("Ordenamento por idade crescente");
  return employees.sort((a, b) => a.idade - b.idade);
};
const descendingOrderByAge = (employees) => {
  console.log("Ordenamento por idade decrescente");
  return employees.sort((a, b) => a.idade - b.idade).reverse();
};
const growOrderByWage = (employees) => {
  console.log("Ordenamento por salario crescente");
  return employees.sort((a, b) => a.salario - b.salario);
};
const descendingOrderByWage = (employees) => {
  console.log("Ordenamento por salario decrescente");
  return employees.sort((a, b) => a.salario - b.salario).reverse();
};
const growOrderBySeniority = (employees) => {
  console.log("Ordenamento por senioridade crescente");
  return employees.sort(compareBySeniority);
};
const descendingOrderBySeniority = (employees) => {
  console.log("Ordenamento por senioridade decrescente");
  return employees.sort(compareBySeniority).reverse();
};

let orderedArray = growOrderByAge(employees);
printEmployees(orderedArray);
orderedArray = descendingOrderByAge(employees);
printEmployees(orderedArray);
orderedArray = growOrderByWage(employees);
printEmployees(orderedArray);
orderedArray = descendingOrderByWage(employees);
printEmployees(orderedArray);
orderedArray = growOrderBySeniority(employees);
printEmployees(orderedArray);
orderedArray = descendingOrderBySeniority(employees);
printEmployees(orderedArray);
