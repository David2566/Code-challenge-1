const prompt = require("prompt-sync")();

const basicSalary = prompt("Enter the employees salary: ");
const result = getNetSalary(basicSalary);
console.log(`The net salary will be Ksh${result}`);

function getNetSalary(basicSalary)
{
    let NHIF = 0;
    let NSSF = 0;

    if (basicSalary <= 5999) {
      NHIF = 150;
      NSSF = 600;

      return basicSalary - NHIF - NSSF;

    } else if (basicSalary <= 14999 && basicSalary >= 12000) {
      NHIF = 500;
      NSSF = 600;

      return basicSalary - NHIF - NSSF;

    } else if (basicSalary <= 19999 && basicSalary >= 15000) {
      NHIF = 600;
      NSSF = 900;

      return basicSalary - NHIF - NSSF;

    } else if (basicSalary <= 24999 && basicSalary >= 20000) {
      NHIF = 750;
      NSSF = 1200;

      return basicSalary - NHIF - NSSF;
      
    } else if (basicSalary <= 34999 && basicSalary >= 30000) {
      NHIF = 900;
      NSSF = 1800;

      return basicSalary - NHIF - NSSF;

    } else if (basicSalary <= 59999 && basicSalary >= 50000) {
      NHIF = 1200;
      NSSF = 2160;

      return basicSalary - NHIF - NSSF;

    } else if (basicSalary <= 79999 && basicSalary >= 70000) {
      NHIF = 1400;
      NSSF = 2160;

      return basicSalary - NHIF - NSSF;
      
    } else if (basicSalary >= 100000) {
      NHIF = 1700;
      NSSF = 2160;

      return basicSalary - NHIF - NSSF;
    }
    else
    {
        return " out of range";
    }
    
}