const name = "Saliha";
const repoCount = 20;
const email = "user@google.com";

console.log(`My name is ${name} and my repo count is ${repoCount}`); // My name is Saliha and my repo count is 20

// console.log(name +  repoCount + " email");
// console.log(name); // Saliha
// console.log(repoCount); // 20
// console.log(email); // user@google.com

const gameName = new String("saliha");
console.log(gameName); // String { 'saliha' }
console.log(gameName.length); // 6
console.log(gameName[0]); // s
console.log(gameName.__proto__); // String.prototype
console.log(gameName.toUpperCase()); // SALIHA
console.log(gameName.charAt(0)); // s
console.log(gameName.charAt(4)); // h
console.log(gameName.charCodeAt(0)); // 115
console.log(gameName.indexOf("l")); // 2
console.log(gameName.lastIndexOf("l")); // 3
console.log(gameName.slice(3, 6)); // iha
console.log(gameName.substring(0, 3)); // sal
console.log(gameName.replace("saliha", "sal")); // sal
console.log(gameName.split("")); // [ 's', 'a', 'l', 'i', 'h', 'a' ]
console.log(gameName.trim()); // saliha
console.log(gameName.startsWith("s")); // true
console.log(gameName.endsWith("a")); // true
console.log(gameName.includes("li")); // true
console.log(gameName.toLowerCase()); // saliha
console.log(gameName.toString()); // saliha
console.log(gameName.valueOf()); // saliha
console.log(gameName.concat(" is a game")); // saliha is a game
console.log(gameName.padStart(10, "0")); // 000saliha
console.log(gameName.padEnd(10, "0")); // saliha0000
console.log(gameName.repeat(2)); // salihasaliha
console.log(gameName.search("li")); // 2
console.log(gameName.match(/l/g)); // [ 'l', 'l' ]
console.log(gameName.matchAll(/l/g)); // [ [ 'l', index: 2, input: 'saliha', groups: undefined ], [ 'l', index: 3, input: 'saliha', groups: undefined ] ]
console.log(gameName.localeCompare("saliha")); // 0 (same string)
console.log(gameName.localeCompare("saliha", "en", { sensitivity: "base" })); // 0 (same string)
console.log(gameName.localeCompare("saliha", "en", { sensitivity: "accent" })); // 0 (same string)
console.log(gameName.localeCompare("saliha", "en", { sensitivity: "case" })); // 0 (same string)
console.log(gameName.localeCompare("saliha", "en", { sensitivity: "variant" })); // 0 (same string)
console.log(gameName.toLocaleUpperCase("en-US")); // SALIHA
console.log(gameName.toLocaleLowerCase("en-US")); // saliha
console.log(gameName.toLocaleString("en-US")); // saliha
 