// **************
//   SCOPE:
// **************

// Scope in JavaScript refers to the accessibility and visibility of variables in different parts of your code.
// There are two main types of scope in JavaScript: global scope and local scope.
  

// 1. Global Scope:


// Variables declared outside any function or block have global scope, meaning they can be accessed from 
// anywhere in the code, including within functions.

const globalVar = 10; // Global variable

function globalFunction() {
  console.log(globalVar); // Can access globalVar here
}

globalFunction();



// 2. Local Scope:


// Variables declared inside a function have local scope, meaning they can only be accessed within that specific
// function and are not visible outside of it.

function localFunction() {
    const localVar = 5; // Local variable
    console.log(localVar); // Can access localVar here
  }
  
  localFunction();
  // console.log(localVar); // Will cause an error, localVar is not defined here