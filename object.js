// In JavaScript, an object is a data structure that allows you to store and organize data in key-value pairs.
// It is one of the fundamental data types and is used extensively in JavaScript for various purposes.
// Objects are versatile and can represent real-world entities, configurations, or any other data that
// needs to be grouped together.

// An object in JavaScript is defined using curly braces {} and contains zero or more key-value pairs.
// The keys (also known as properties) are strings or symbols, and the values can be of any data type, including
// other objects.

// FOR EXAMPE:

const person = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isEmployed: true,
  };
  
  
  // EXPLANATION:
  
  // In this example, person is an object with four properties: name, age, email, and isEmployed, each with 
  // its corresponding value.
  
  // You access the values of an object, you can use two main approaches:
  
  
  // 1. Dot notation:
  
  
  // You can access the properties of an object using the dot notation, followed by the property name. 
  
  // For example:
  
  console.log(person.name); // Output: "John"
  console.log(person.age);  // Output: 30
  
  
  // 2. Bracket notation:
  
  
  // You can also use square brackets [] to access the properties of an object, especially when the property name 
  // contains special characters or spaces. 
  
  // For example:
  
  
  console.log(person["name"]); // Output: "John"
  console.log(person["age"]);  // Output: 30
  
  
  // The bracket notation is also useful when you need to access a property dynamically, i.e., when the property 
  // name is stored in a variable:
  
  const propertyName = "email";
  console.log(person[propertyName]); // Output: "john@example.com"
  
  
  
  // when using the dot notation, the property name must be a valid JavaScript identifier 
  // (e.g., no spaces, starts with a letter or underscore, etc.). On the other hand, the bracket notation 
  // allows you to use any string as the property name. Both notations are commonly used, and the choice depends 
  // on the specific use case.
  
  