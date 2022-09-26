// William Almond
// Lesson 2 Assignment 1
// This script calculates total savings after continually increasing contribution.

const x = 37;
const y = 67;
const annualIncrease = 3;
let savings = 12000;
let monthlySavings = 600;


for (i = 0; i < (y-x); i++) {
    console.log('My savings per year ' + savings)
    monthlySavings = monthlySavings + ((annualIncrease/100)*monthlySavings)
  console.log('Monthly: ' +monthlySavings)
  for (j = 0; j < 12; j ++) {
    savings = savings + monthlySavings;
  }
}
console.log('This is my savings at retirement assuming ' + annualIncrease + '% increase in monthly savings every year. Ending Monthly: ' + monthlySavings + ' Savings: ' + savings)