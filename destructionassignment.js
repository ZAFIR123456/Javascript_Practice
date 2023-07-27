// Destructuring assignment is a feature introduced in ES6 (ECMAScript 2015) that allows you to extract values 
// from arrays or properties from objects and assign them to variables in a more concise and convenient way. 
// It provides a cleaner syntax for extracting data from complex data structures.

// FOR EXAMPLE:


// DESTRUCTION ARRAY

// Traditional way
const numbers = [1, 2, 3];
const firstNumber = numbers[0];
const secondNumber = numbers[1];
const thirdNumber = numbers[2];

// Using destructuring assignment
const [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3


// DESTRUCTION OBJECTS


// Traditional way
const person = { firstName: 'John', lastName: 'Doe', age: 30 };

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// Using destructuring assignment
const { firstName, lastName, age } = person;
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'
console.log(age); // 30
