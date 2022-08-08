const user = { name: "Lucas", age: 21 };
const user2 = { name: "Joao", age: 16 };

const checkMaiority = ({ age }) => {
  if (age >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
};

checkMaiority(user);
