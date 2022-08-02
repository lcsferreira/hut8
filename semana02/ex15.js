let students = [
  { nome: "Marcos", notas: [10, 7, 2] },
  { nome: "Michele", notas: [10, 10, 10] },
  { nome: "Pedro", notas: [3, 10, 9] },
  { nome: "Andressa", notas: [6, 6, 8] },
  { nome: "Cristiana", notas: [7, 9, 2] },
];

students.forEach((student) => {
  if (calcAverage(student.notas) >= 7) {
    console.log(student.nome);
  }
});

function calcAverage(grades) {
  let result = 0;
  grades.forEach((grade) => {
    result += grade;
  });
  return result / grades.length;
}
