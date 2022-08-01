let grades = [6, 8, 7];
let average = 0;
grades.forEach((grade) => {
  average += grade;
});
average = average / grades.length;

console.log(average);
