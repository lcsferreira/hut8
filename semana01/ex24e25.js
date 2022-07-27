function checkTaxes(salary) {
  const zeroTaxes = salary <= 21453.24;
  const tax75 = salary >= 21453.25 && salary <= 32151.48;
  const tax150 = salary >= 32151.49 && salary <= 42869.16;
  const tax225 = salary >= 42869.17 && salary <= 53565.72;
  const tax275 = salary > 53565.72;

  if (zeroTaxes) {
    return 0;
  } else if (tax75) {
    return salary * 0.075;
  } else if (tax150) {
    return salary * 0.15;
  } else if (tax225) {
    return salary * 0.225;
  } else if (tax275) {
    return salary * 0.275;
  }
}

function checkBestProposal(salaryClt, salaryPj) {
  let cltSalary = salaryClt * 13 + 700 + (8 / 100) * salaryClt;
  let pjSalary = salaryPj * 12;

  cltSalary = cltSalary.toFixed(2);
  pjSalary = pjSalary.toFixed(2);

  let taxPj = checkTaxes(pjSalary);
  let taxClt = checkTaxes(cltSalary);

  console.log(`PJ com Imposto de R$ ${taxPj}`);
  console.log(`CLT com Imposto de R$ ${taxClt}`);

  cltSalary -= taxClt;
  pjSalary -= taxPj;

  if (cltSalary > pjSalary) {
    console.log(`Total CLT: R$ ${cltSalary}`);
    console.log(`Total PJ: R$ ${pjSalary}`);
    console.log("CLT melhor proposta");
  } else if (cltSalary < pjSalary) {
    console.log(`Total CLT: R$ ${cltSalary}`);
    console.log(`Total PJ: R$ ${pjSalary}`);
    console.log("PJ melhor proposta");
  } else {
    console.log(`Total CLT: R$ ${cltSalary}`);
    console.log(`Total PJ: R$ ${pjSalary}`);
    console.log("CLT melhor proposta, devido à férias");
  }
}

checkBestProposal(3000, 3000);
