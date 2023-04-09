// process.argv allows to pass arguments in the run time
let empName = process.argv[2];
let age = parseInt(process.argv[3]);
let basicSalary = parseFloat(process.argv[4]); 

let hra = (50 * basicSalary) / 100;
let specialAllowance = (30 * basicSalary) / 100;
let pf = (12 * basicSalary) / 100;

let grossSalary = (basicSalary + hra + specialAllowance) - pf;

let annualGrossSalary = 12 * grossSalary;


console.log(`Employee ${empName} annual Salary is $${annualGrossSalary}`)