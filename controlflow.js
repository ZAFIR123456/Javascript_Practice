// ***************************
// IF/ELSE
// ***************************

// Control flow if/else statements are an essential concept in programming and are used to make decisions
// based on certain conditions. The "if" statement evaluates a condition, and if it's true, the code inside the
// "if" block executes. If the condition is false, the code inside the "else" block (if provided) will execute.

if (condition) {
  // Code block to execute if the condition is true
} else {
  // Code block to execute if the condition is false
}

// FOR EXAMPLE

const age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// You can also use the "else if" statement to check multiple conditions:

const score = 75;

if (score >= 90) {
  console.log("Excellent! You got an A.");
} else if (score >= 80) {
  console.log("Good! You got a B.");
} else if (score >= 70) {
  console.log("You got a C.");
} else {
  console.log("You need to improve your score.");
}

// ***************************
// SWITCH CASE
// ***************************

// Switch case is a control structure in programming languages, including JavaScript, used to perform different
// actions based on the value of a variable or expression. It provides an alternative to using multiple if-else
// statements when you have a series of conditions to check against a single variable.

switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  // Add more cases as needed
  default:
  // Code to be executed if expression doesn't match any case
}

WORKING;

// 1. The expression is evaluated once, and its value is compared against each case value.

// 2. If the value of the expression matches a case value, the code block associated with that case is executed.

// 3. The break statement is used to exit the switch block once a matching case is found.
// This prevents the execution of the subsequent cases.

// 4. If there is no match for the expression with any of the case values, the code block under the
// default label is executed (if present). The default case is optional.

let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: "Tuesday"
