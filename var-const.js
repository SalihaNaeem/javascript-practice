const accountId = 12345;
let accountEmail = "saliha@google.com";
var accountPassword = "4567";
let accountCity = "Okara";
let accountState;

// accountEmail = 4; // not allowed... This will throw an error because accountEmail is declared with let

accountEmail = "saliha.com";
accountPassword = "8753";
accountCity = "Lahore";

console.log(accountId);

/*
prefer not to use var, use let or const instead
const is used for variables that should not change, while let is used for variables that can change.
because of issue in block scope and functional scope, it is better to use let or const instead of var.
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
