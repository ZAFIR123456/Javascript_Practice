// Operators in programming are symbols or keywords that perform specific operations on one or more 
// operands (values or variables). In JavaScript, operators can be classified into several categories
//  based on their functionality.


{"TYPES OF OPERATOR"}


{"Arithmetic Operators:"}

// +: Addition
// -: Subtraction
// *: Multiplication
// /: Division
// %: Modulo (Remainder after division)

{"Assignment Operators:"}

// =: Simple assignment
// +=: Add and assign
// -=: Subtract and assign
// *=: Multiply and assign
// /=: Divide and assign
// %=: Modulo and assign

{"Comparison Operators:"}

// ==: Equal to (loose equality, type coercion)
// ===: Equal to (strict equality, no type coercion)
// !=: Not equal to (loose inequality, type coercion)
// !==: Not equal to (strict inequality, no type coercion)
// >: Greater than
// <: Less than
// >=: Greater than or equal to
// <=: Less than or equal to

{"Logical Operators:"}

// &&: Logical AND
// ||: Logical OR
// !: Logical NOT

{"Unary Operators:"}

// ++: Increment by 1
// --: Decrement by 1
// -: Unary negation (converts a value to its negative)

{"Conditional (Ternary) Operator:"}

// condition ? expr1 : expr2: If the condition is true, expr1 is evaluated; otherwise, expr2 is evaluated.


{"Type Operators:"}

// typeof: Returns a string representing the data type of a value.
// instanceof: Checks if an object is an instance of a specific class.



{"Spread & rest operators"}

// The spread and rest operators are two important features introduced in ECMAScript 6 (ES6) that make working 
// with arrays and function arguments more convenient and powerful.


{"Spread Operator (...):"}

// The spread operator is denoted by three dots (...). It is used to split an array or object into individual 
// elements or properties.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combining two arrays using spread operator
const combinedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]


// The spread operator can also be used to create shallow copies of arrays and objects:


const originalArray = [1, 2, 3];
const copyArray = [...originalArray]; // Creates a copy of originalArray

const originalObject = { a: 1, b: 2 };
const copyObject = { ...originalObject }; // Creates a copy of originalObject


{"Rest Operator (...):"}

// The rest operator also uses the three dots (...) syntax. It is used in function parameters to gather all the 
// remaining arguments into an array. It allows functions to accept a variable number of arguments.


// Using rest parameter to accept multiple arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const result = sum(1, 2, 3, 4, 5); // 15


// The rest operator can also be used to handle a part of the arguments while passing the rest to another 
// function:



function multiply(multiplier, ...numbers) {
    return numbers.map((num) => num * multiplier);
  }
  
  const multipliedNumbers = multiply(2, 1, 2, 3, 4); // [2, 4, 6, 8]

  
// In this example, the first argument 2 is assigned to the multiplier parameter, and the rest of the 
// arguments 1, 2, 3, 4 are gathered into the numbers array.

// Both the spread and rest operators are powerful tools that enhance the flexibility and readability of 
// JavaScript code, especially when working with arrays and function arguments.