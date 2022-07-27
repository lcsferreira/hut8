let salary = 3000;
let desiredSalary = salary * 2;
const hoursWorkedPerMonth = 160;

function calculateProjectPrice(projectTime) {
  let monthsWorked = projectTime / hoursWorkedPerMonth;
  monthsWorked = Math.floor(monthsWorked);
  console.log(`Projeto durará ${monthsWorked} meses`);
  projectCost = monthsWorked * desiredSalary;
  return projectCost;
}

let cost = calculateProjectPrice(3000);

console.log(`Projeto custará R$ ${cost}`);
