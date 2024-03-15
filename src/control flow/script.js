/** @type {import('tailwindcss').Config} */

// Arithmetic operators (+, -, *, /, %)

let a = 5;
let b = 7;

console.log(a + b );
console.log(a - b );
console.log(a * b );
console.log(a / b );
console.log(a % b );
// Assignment operators (=, +=, -=, *=, /=, %=).

let x = 10;
y= 30;
console.log( y += x); // y = 10 + 30 = 40 

// Comparison operators (==, ===, !=, !==, >, <, >=, <=).

let a1 = 10; //string
let a2 = 10; // number 

// ==

console.log(typeof a1); 
console.log(typeof a2); 
console.log(a1 === a2);


// Logical operators (&&, ||, !).


let c = 50;
let n = 40;
console.log(c > n && n < c); // 50 > 40 = true  50 < 40 false 
// true && false return false

let c1 = 50;
let n1 = 40;
console.log(c1 > n1 || c1 < n1); // 50 > 40 = true  50 < 40 false 
// true && false return false 

// ! not

let myName  = "saima";
console.log(!myName);



// Increment (++) and decrement (--) operators.

let count = 0;
console.log(count);

count++

console.log(count);
count++

console.log(count); // 2

count--

console.log(count);
count--

console.log(count);
count--

console.log(count);