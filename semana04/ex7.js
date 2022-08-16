const students = [
  { nome: "Lucas", notas: [9, 7, 4] },
  { nome: "Lima", notas: [9, 7, 0] },
];

const findStudentsWithGradeZero = () => {
  return students.filter((student) => {
    if (
      student.notas.find((grade) => {
        return grade === 0;
      }) !== undefined
    ) {
      return student;
    }
  });
};

console.log(findStudentsWithGradeZero());
