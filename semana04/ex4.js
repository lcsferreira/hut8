const grades = [5, 8, 7];

const calcAvg = () => {
  let result = 0;
  grades.forEach((grade) => {
    result += grade;
  });
  return (result / grades.length).toFixed(1);
};

console.log(calcAvg());
