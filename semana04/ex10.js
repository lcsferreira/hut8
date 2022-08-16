const numbers1 = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];
const numbers2 = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255];

const findEquals = () => {
  return numbers1.filter((number) => {
    return numbers2.includes(number);
  });
};

console.log(findEquals());
