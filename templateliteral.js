// Template literals, also known as template strings, are a feature introduced in ECMAScript 6 (ES6) to make 
// working with strings in JavaScript more convenient and flexible. They allow you to embed expressions and 
// multiline strings directly within backticks ( ) instead of using traditional string concatenation with 
// the + operator. Template literals provide a cleaner syntax for string interpolation and multiline strings.


// Basic Syntax:

const variable = 'value';
const templateString = `This is a template string with ${variable}.`;

// String Interpolation:

const name = 'Alice';
const age = 30;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: "Hello, my name is Alice and I am 30 years old."


// Multiline Strings:

const multilineString = `
  This is a multiline
  string using template literals.
  It spans multiple lines without the need for line breaks.
`;
console.log(multilineString);

/*
Output:
  "This is a multiline
  string using template literals.
  It spans multiple lines without the need for line breaks."
*/


// Template literals provide a more elegant and readable way to work with strings in JavaScript, especially 
// when you need to include dynamic values or work with multiline content. They are widely used in modern 
// JavaScript development and are supported in all major browsers and environments.