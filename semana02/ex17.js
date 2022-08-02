let persons = [
  { name: "Marília", age: 26, job: "Dev" },
  { name: "Juca", age: 21, job: "RH" },
  { name: "Flávia", age: 30, job: "Financeiro" },
  { name: "Sérgio", age: 24, job: "Dev" },
];

let output = "";

persons.forEach((person) => {
  if (person.job === "Dev") {
    output += `${person.name} é dev.`;
  } else {
    output += `${person.name} não é dev.`;
  }
});

console.log(output);
