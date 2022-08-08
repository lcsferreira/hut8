const employees = [
  { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
  { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
  { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
  { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
  { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
  { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
  { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
];

//Usando funções de js
const growOrderByAgeJS = (employees) => {
  return employees.sort((a, b) => a.idade - b.idade);
};
const descendingOrderByAgeJS = (employees) => {
  return employees.sort((a, b) => a.idade - b.idade).reverse();
};
const growOrderByWageJS = (employees) => {
  return employees.sort((a, b) => a.salario - b.salario);
};
const descendingOrderByWageJS = (employees) => {
  return employees.sort((a, b) => a.salario - b.salario).reverse();
};
const growOrderBySeniority = () => {};
const descendingOrderBySeniority = () => {};

console.log(growOrderByAge(employees));
// console.log("");
// console.log(descendingOrderByAge(employees));
// console.log(growOrderByWage(employees));
// console.log("");
// console.log(descendingOrderByWage(employees));
