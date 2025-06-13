"use strict";  // Enforce strict mode
// treat all js code as newer version
//alert(3 + 3);  // we are using nodejs, not browser...This will show an alert with the result of 3 + 3, which is 6

console.log(3 + 3); 

console.log("Saliha");  // code readability that should be high 


// Example
let name = "saliha";
let age = 18;
let isLoggedIn = false;
let state ;

// Number => 2 to 53
// bigint => 2...n
// string => "text"
// boolean => true/false
// null => standalone value 
// undefined => absence of value
//symbol => unique and immutable value


//object

console.log(typeof name);  // string
console.log(typeof age);  // number
console.log(typeof isLoggedIn);  // boolean
console.log(typeof state);  // undefined
console.log(typeof null);  // object (this is a known bug in JavaScript, null is actually a primitive value)