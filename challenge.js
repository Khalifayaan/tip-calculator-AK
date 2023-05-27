// Good Luck! You got this 💪🏾
// Write your code here.


// Value to the bill variable
let bill = 310;

// Calculate the tip and total bill based on the bill value
let tip;
if (bill >= 50 && bill <= 300) {
  tip = bill * 0.15; // 15% tip
} else {
  tip = bill * 0.20; // 20% tip
}

let totalBill = bill + tip;

// Print the result to the console
console.log(
  "The bill is " +
    bill +
    ", the tip is " +
    tip +
    ", and the total bill is " +
    totalBill
);