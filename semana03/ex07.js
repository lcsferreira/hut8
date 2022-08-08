const grades = [6, 8, 7];

const calcAverage = (grades) => {
  let average = 0;
  for (let i = 0; i < grades.length; i++) {
    average += grades[i];
  }
  return (average /= grades.length);
};

console.log(`Média: ${calcAverage(grades)}`);
