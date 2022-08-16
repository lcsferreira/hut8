let values = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];

const multiplyByNumber = (number) => {
  return values.map((value) => {
    return (value *= number);
  });
};

console.log(multiplyByNumber(5));
