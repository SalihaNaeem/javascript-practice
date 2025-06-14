// let score = 44;
let score = '44abc'; // this is a string with numbers and letters
// let score = 44; // this is a number
// let score = "44"; // this is a string, not a number

console.log(typeof score); // string
console.log(typeof (score)); // string

let valueInNumber = Number(score); // convert to numberconsole.log(typeof valueInNumber); // number
//console.log(valueInNumber); // 44, if score is a string with numbers and letters, it will return NaN (Not a Number)
//console.log(valueInNumber + 2); // 46, if score is a string with numbers and letters, it will return NaN (Not a Number)

// "33" => 33
// "33abc" => NaN
// "abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1; // this is a number, but it represents a boolean value
let isLoggedInBoolean = Boolean(isLoggedIn); // convert to boolean
console.log(typeof isLoggedInBoolean); // boolean
console.log(isLoggedInBoolean); // true, because 1 is truthy in JavaScript

// 1 => true; 0 => false
// "" => false
// "saliha" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(someNumber);
console.log( typeof someNumber);


//*************************** Opertions ************************ 

let value = 5;
let negValue = -value;
// console.log(negValue);

// console.log(4+4);
// console.log(4-4);
// console.log(4*4);
// console.log(4**8);
// console.log(4/4);
// console.log(4%4);

let str1 = "Saliha";
let str2 = " Naeem";

let str3 = str1 + str2;
// console.log(str3)

// console.log("1"+ 2);
// console.log(1+ "2");
// console.log("1"+ 2 + 3);
// console.log(1+ 2 + "3");
// console.log("1"+ 2 + "3");


// console.log(6 + 3 * 9 % 8 - 2 ** 3);
// console.log(6 + (3 * 9) % 8 - (2 ** 3)); // Parentheses can be used to change the order of operations


console.log(true);
console.log(false);

console.log(+true);
console.log(-false);