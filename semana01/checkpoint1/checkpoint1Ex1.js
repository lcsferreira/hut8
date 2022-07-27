let name = "Lucas";
let surname = "Ferreira";
let birthDay = "17";
let birthMonth = "01";
let birthYear = "2001";
let grade1 = 8;
let grade2 = 9.5;

let actualDate = new Date();
let birthDate = new Date(birthYear, birthMonth, birthDay);

let age = actualDate.getUTCFullYear() - birthDate.getUTCFullYear();
let averageGrade = (grade1 + grade2) / 2;

console.log(`Nome completo: ${name} ${surname}`);
console.log(`Idade: ${age}`);
console.log(`Data de nascimento: ${birthDay}/${birthMonth}/${birthYear}`);
console.log(`Média: ${averageGrade}`);
