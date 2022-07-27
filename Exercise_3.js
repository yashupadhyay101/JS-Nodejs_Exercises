// Write a JavaScript function to check whether an `input` is an array or not.
// isArray('Hello World') --> false
// isArray([1,2,3,4]) --> true

const prompt = require("prompt-sync")();

//Accepting input
let arr1 = prompt("Type your first input ");
let arr2 = Array.from(prompt("Type your second input ").split(), Number);

console.log(Array.isArray(arr1));
console.log(Array.isArray(arr2));

// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_3.js
// Type your first input 'Hello World'
// Type your second input 1,2,3,4
// false
// true
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises>
