const names = [
  "Juliana",
  "Pedro",
  "Regina",
  "João",
  "Patrícia",
  "Gabriel",
  "Carlos",
  "Carla",
];

const findName = "Carla";

const isNameAvailable = () => {
  if (names.includes(findName)) {
    console.log(`${findName} existe no array`);
  } else {
    console.log(`${findName} não existe no array`);
  }
};

isNameAvailable();
