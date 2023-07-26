// An array is an ordered collection of elements, where each element is identified by an index or a numerical
// position, starting from 0 for the first element. Arrays in JavaScript are enclosed in square brackets []
// and can contain zero or more elements.

// For example, here's how you can define an array in JavaScript:

// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// An array of strings
const fruits = ["apple", "banana", "orange"];

// An array of mixed data types
const mixedArray = [1, "hello", true, null, { name: "John" }];

// You can access elements in an array using their index. For example:

console.log(numbers[0]); // Output: 1
console.log(fruits[1]); // Output: "banana"

// *******************
// ARRAY METHODS
// *******************

// Array methods are built-in functions in JavaScript that allow you to perform various operations on arrays.

// 1. Array.push(): Adds one or more elements to the end of an array and returns the new length of the array.

// Example:

const number = [1, 2, 3];
number.push(4);
// Output: numbers = [1, 2, 3, 4]

// 2. Array.pop(): Removes the last element from an array and returns that element.

// Example:

const fruit = ["apple", "banana", "orange"];
const removedFruit = fruit.pop();
// Output: fruits = ['apple', 'banana'], removedFruit = 'orange'

// 3. Array.shift(): Removes the first element from an array and returns that element. It also shifts the other
// elements to a lower index.

// Example:

const colors = ["red", "green", "blue"];
const shiftedColor = colors.shift();
// Output: colors = ['green', 'blue'], shiftedColor = 'red'

// 4. Array.unshift(): Adds one or more elements to the beginning of an array and returns the new length of
//  the array.

// Example:

const animals = ["lion", "tiger", "leopard"];
const newLength = animals.unshift("elephant", "giraffe");
// Output: animals = ['elephant', 'giraffe', 'lion', 'tiger', 'leopard'], newLength = 5

// 5. Array.forEach(): Executes a provided function once for each array element.

// Example:

const count = [1, 2, 3];
count.forEach((num) => console.log(num));
// Output: 1, 2, 3 (prints each number on a new line)

// 6. Array.map(): Creates a new array with the results of calling a provided function on every element in the array.

// Example:

const no = [1, 2, 3];
const doubledNumbers = no.map((num) => num * 2);
// Output: doubledNumbers = [2, 4, 6]

// 7. Array.filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// Example:

const Numbers = [1, 2, 3, 4, 5];
const evenNumbers = Numbers.filter((num) => num % 2 === 0);
// Output: evenNumbers = [2, 4]

// 8. Array.includes(): Determines whether an array includes a certain value and returns true or false.

// Example:

const things = ["apple", "banana", "orange"];
const includesBanana = things.includes("banana");
// Output: includesBanana = true

// 9. Array.indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it
// is not present.

// Example:

const value = [1, 2, 3, 4, 5];
const index = value.indexOf(3);
// Output: index = 2

// These array methods can be incredibly useful for manipulating arrays and working with data in JavaScript.
