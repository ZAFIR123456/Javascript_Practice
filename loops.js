// "Loops" in JavaScript are used to execute a block of code repeatedly until a specified condition is met. 
// There are three types of loops in JavaScript:

// *****************
// 1. FOR LOOP:
// *****************

// The for loop is commonly used when you know the number of iterations required.

// Syntax:

for (initialization; condition; increment/decrement) {
    // Code to be executed in each iteration
}

// EXAMPLE

for (let i = 0; i < 5; i++) {
    console.log('Iteration:', i);
}


// *****************
// 2. WHILE:
// *****************

// The while loop is used when the number of iterations is unknown, and the loop will continue until 
// the specified condition becomes false.

// Syntax:

while (condition) {
    // Code to be executed in each iteration
}

// EXAMPLE

let count = 0;
while (count < 5) {
    console.log('Count:', count);
    count++;
}


// *****************
// 3. DO WHILE:
// *****************


// The do...while loop is similar to the while loop, but the code inside the loop is executed at least once,
// regardless of whether the condition is true or false.

// Syntax:

do {
    // Code to be executed in each iteration
} while (condition);

// EXAMPLE

let num = 1;
do {
    console.log('Number:', num);
    num++;
} while (num <= 5);
