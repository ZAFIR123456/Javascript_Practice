// DOM stands for "Document Object Model" and is a programming interface for web documents. It represents the 
// structure of an HTML or XML document in a tree-like structure, where each element in the document is a 
// node in the tree. The DOM provides a way for programs (such as JavaScript) to interact with and manipulate 
// the content and structure of a web page dynamically.

// In the context of JavaScript, the DOM is accessed using the global document object, which is part of the 
// Window object in a browser environment. Through the document object, you can:

// 1. Access Elements: You can use methods like getElementById, getElementsByClassName, getElementsByTagName, 
// or modern methods like querySelector and querySelectorAll to select and access specific elements on a 
// web page.

// 2. Manipulate Content: You can change the content of HTML elements, such as modifying the text, attributes, 
// or HTML structure itself.

// 3. Modify Styles: You can dynamically change the CSS styles of elements, including their size, position, 
// color, and more.

// 4. Respond to Events: You can attach event listeners to elements to respond to user interactions 
// (e.g., clicks, keypresses, etc.) and execute specific actions in response.


// Here's a simple example of using JavaScript to change the content of an HTML element:



// ************
// HTML CODE:
// ************

{"it is in index.ntml file"}


// ************
// JAVASCRIPT CODE
// ************


// Access the DOM element with id "demo"
const demoElement = document.getElementById('demo');

// Access the DOM element with id "changeButton"
const changeButton = document.getElementById('changeButton');

// Add an event listener to the button
changeButton.addEventListener('click', function () {
  // Change the text content of the "demo" element
  demoElement.textContent = 'Text changed!';
});


// When the button is clicked, the text "Hello, World!" will be replaced with "Text changed!" due to the 
// JavaScript manipulation of the DOM.

// In summary, the DOM is a powerful feature of JavaScript that allows you to interact with and modify web 
// pages dynamically, making it a core technology for building dynamic and interactive web applications.