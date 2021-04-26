// Logical Operators

//Logical AND (&&). It returns TRUE
//if both operands are TRUE.

console.log(true && true);

console.log(false && true);

// Real life example:
//let highIncome = true;
//let goodCreditScore = true;
//let eligibleForLoan = highIncome && goodCreditScore;

//console.log(eligibleForLoan);


//Logical OR (!!). It returns TRUE if one of 
//the operands is TRUE.

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);











