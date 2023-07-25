// ************
// FUNCTIONS:
// ************

// Functions in JavaScript are blocks of code that can be defined and invoked to perform specific tasks.
// They are reusable and help organize code into smaller, manageable chunks. Functions can take arguments (input)
// and return values (output).

// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  // Function Invocation
  const message = greet("John");
  console.log(message); // Output: "Hello, John!"
  
  // *********************
  // TYPES OF FUNCTION
  // *********************
  
  
  // 1.  CALLBACK FUNCTION  
  
  // Callback functions are an essential concept in JavaScript and are widely used, especially when dealing
  // with asynchronous operations. A callback function is a function that is passed as an argument to another
  // function and is executed after the completion of that function. The primary purpose of callback functions
  // is to ensure that certain code runs only after the completion of a specific operation or task.
  
  // Here's a simple example of a callback function in JavaScript:
  
  
  // Example of a function with a callback
  function fetchDataFromServer(callback) {
  
      // Simulating an asynchronous operation with setTimeout
      setTimeout(function () {
        const data = { name: "John", age: 30 };
        callback(data); // Calling the callback function with the fetched data
      }, 2000); // Simulating a delay of 2 seconds
    }
    
    // Callback function to handle the fetched data
    function handleData(data) {
      console.log("Data received:", data);
    }
    
    // Calling the fetchDataFromServer function with the handleData callback
    fetchDataFromServer(handleData);
  
  
  EXPLANATION
  
  // In this example, the fetchDataFromServer function simulates an asynchronous operation using setTimeout,
  // which takes two arguments: a function and a delay in milliseconds. After a 2-second delay, it calls the
  //  provided function, which is the callback.
  
  // The handleData function is the callback passed to fetchDataFromServer. It receives the fetched data and logs
  //  it to the console when the async operation is complete.
  
  // Callbacks are especially useful when working with APIs, reading files, making database queries, or performing
  //  any other task that may take time to complete. By using callbacks, JavaScript can ensure that code execution
  // continues only after the required data or task is available, allowing for more efficient and non-blocking
  // code execution.
    
  
  
  // 2. ARROW FUNCTION
  
  
  // Arrow functions, also known as fat arrow functions, are a concise way to write JavaScript functions. 
  // They were introduced in ES6 (ECMAScript 2015) and have become a popular syntax for defining functions 
  // due to their simplicity.
  
  
  // The syntax of an arrow function looks like this:
  
  
  const functionName = (parameter1, parameter2 ) => {
    // Function body
    // Return statement (if needed)
  };
  
  
  // Regular Function Expression:
  
  // Regular function expression to calculate the square of a number
  const square = function(num) {
      return num * num;
  };
  
  
  // Arrow Function Equivalent:
  
  // Arrow function to calculate the square of a number
  const squar = (num) => num * num;
  
  
  // EXPLANATION 
  
  
  // In this example, both the regular function expression and the arrow function calculate the square of a number.
  // The arrow function syntax omits the function keyword and uses a fat arrow (=>) instead. When the function has
  // only one parameter, you can omit the parentheses around the parameter.
  