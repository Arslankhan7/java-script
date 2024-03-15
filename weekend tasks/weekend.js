
let isSunny = true;
let isRainy = false;
let isCloudy = true;

if (isRainy || isCloudy) {
  console.log("Bring an umbrella");
}

if (isSunny && !isRainy) {
  console.log("Enjoy the sunshine");
}

// You have three variables isSunny, isRainy, and isCloudy storing boolean values indicating weather conditions. Write JavaScript code to:
// Check if it's raining OR cloudy, and print "Bring an umbrella" if either condition is true.
// Check if it's sunny AND not rainy, and print "Enjoy the sunshine" if both conditions are true.

//Boolean values are a fundamental data type in computer programming and represent the concept of true or false. In most programming languages, boolean values are represented by keywords such as "true" and "false", or by numeric values such as 1 (true) and 0 (false).

// Write a program in if-else condition that checks if a user's age is above 18 and prints "You are eligible to vote" if true, otherwise print "You are not eligible to vote

//if else condition
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}
//You are not eligible to vote  output
let old = 16;

if (old >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Write a program in else-if that helps a user decide what to wear based on the weather. If it's sunny, recommend wearing light clothing; if it's raining, recommend bringing an umbrella; if it's cold, recommend wearing a jacket.

// else if condition
// Variables
let Sunny = true;
let Rainy = false;
let Cold = false;

//weather condition
if (isSunny) {
  console.log("Wear light clothing.");
} else if (isRainy) {
  console.log("Bring an umbrella.");
} else if (isCold) {
  console.log("Wear a jacket.");
} else {
  console.log("only he knows");
}

// Create a program in switch that accepts a number from 1 to 7 as input, representing the days of the week (1 for Monday, 2 for Tuesday, ..., 7 for Sunday). The program should print the corresponding day of the week. If the input is not within the range 1-7, the program should print "Invalid input".

// switch statement
let day = 38;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input");
}
// Create a  function called checkEvenOdd that takes one parameter, number . Inside the function, determine if the number is even or odd. If it's even, return "Even". If it's odd, return "Odd". If the number is not an integer, return "Invalid.

function oddOrEven(number) {
    if (Number.isInteger(number)) {
      return number % 2 === 0 ? "Even" : "Odd";
    } else {
      return "Invalid";
    }
  }
  
  console.log(oddOrEven(5));
  console.log(oddOrEven(10));
  console.log(oddOrEven(3.5));
  
  // Write a program by using the callback and higher order function that defines a function called greetUser. This function takes two parameters: name and callback. Inside greetUser, call the callback function with the name as an argument. Then, define another function named sayHello that takes one parameter name and prints "Hello, {name}!". Finally, call greetUser with your name and sayHello as the callback function
  
  // higher order function and call back
  function greetUser(name, callback) {
    callback(name);
  }
  
  function sayHello(name) {
    console.log(`Hello, `);
  }
  greetUser("YourName", sayHello);
  







// Create an array named favoriteFruits containing the names of your favorite fruits.
// Print the second element of the favoriteFruits array to the console.

// Array Properties and Methods:
const favoriteFruits = ["apple", "banana", "cherry"];

// favorite fruit      //
console.log(favoriteFruits[2]);

// Use the length property     //Definition: Returns the number of elements in the array.
// Use the length property to determine the number of elements in the favoriteFruits array.
console.log(favoriteFruits.length);

//additional favorite fruits    ///

// Create another array named additionalFruits containing some additional favorite fruits.
const additionalFruits = ["orange", "mango", "grapefruit"];

//  concat method      //Definition: Joins two or more arrays and returns a new array.
// use the concat method to concatenate the favoriteFruits and additionalFruits arrays into a new array called allFruits.
// //
const allFruits = favoriteFruits.concat(additionalFruits);
console.log(allFruits);

// push method     ////Definition: Adds one or more elements to the end of an array and returns the new length
// Add a new fruit to the end of the favoriteFruits array using the push method.

favoriteFruits.push("pineapple");
console.log(favoriteFruits);

//pop method     // Definition: Removes the last element from an array and returns that element.
// Remove the last element from the favoriteFruits array using the pop method.
favoriteFruits.pop();
console.log(favoriteFruits);

//shift method    .//Definition: Removes the first element from an array and returns that element.

// Remove the first element from the favoriteFruits array using the shift method.

favoriteFruits.shift();
console.log(favoriteFruits);

//unshift method    //Definition:  It adds one or more elements to the beginning of an array and returns the new length of the array.

favoriteFruits.unshift("grapes");
console.log(favoriteFruits);
