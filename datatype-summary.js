// Primitive Data Types in JavaScript
// This code summarizes the primitive data types in JavaScript
// and their characteristics.
// 7 types
// 1. String   2. Number   3. BigInt
// 4. Boolean   5. Undefined   6. Symbol   7. Null
"use strict"; // Enforce strict mode
// treat all js code as newer version


const score = 120;
const scoreValue = 120.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('456');
const anotherId = Symbol('456');

console.log(id === anotherId);
console.log(id == anotherId);

const bigNumber = 3456678998753224598988000n

// Reference (Non primitive data types):
// 1. Object
// 2. Array
// 3. Functions
const heros = ["Faraz", "Hasan", "Hussain"];
let myObj = {
name: "saliha",
age: 18,

}

const myFunction = function() {
console.log("Hello World");
}
console.log(typeof heros);//object
console.log(typeof isLoggedIn); //Boolean
console.log(typeof score);//Number
console.log(typeof anotherId);  //Symbol
console.log(typeof id);//Symbol
console.log(typeof bigNumber); //BigInt
console.log(typeof myFunction);//function
console.log(typeof scoreValue);//Number
console.log(typeof outsideTemp);//object

//*******************************************************
//  Stack vs Heap Memory
// Stack Memory: Primitive data types are stored in stack memory
// Heap Memory: Non-primitive data types are stored in heap memory

let myYoutubeName = "salihanaeem.com";
 let anothername = myYoutubeName; // This will create a copy of the value in stack memory
// If we change anothername, it will not affect myYoutubeName
anothername = "saluu.com"; // This will not change myYoutubeName

console.log(myYoutubeName); // "salihanaeem.com"
console.log(anothername); // "saluu.com"
// Example of an object
let userOne = {
  name: "saliha",
  email: "user@google.com",
  upi: "user@upi",
};
let userTwo = userOne; // This will create a reference to the same object in heap memory
// If we change userTwo, it will also change userOne

userTwo.name = "salooooooo"; // This will change userOne.name as well

console.log(userOne.name); // "salooooooo"
console.log(userTwo.name); // "salooooooo"
