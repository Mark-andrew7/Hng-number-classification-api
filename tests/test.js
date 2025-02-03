const { isPrime, isPerfect, isArmstrong, checkParity, digitSum } = require('../utils/numberUtils');

const testNumber = 371;

console.log(`Is ${testNumber} prime?`, isPrime(testNumber));
console.log(`Is ${testNumber} a perfect number?`, isPerfect(testNumber));
console.log(`Is ${testNumber} an Armstrong number?`, isArmstrong(testNumber));
console.log(`Parity of ${testNumber}:`, checkParity(testNumber));
console.log(`Digit sum of ${testNumber}:`, digitSum(testNumber));
