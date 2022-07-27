// Write a JavaScript function to get the first n element of an array. If n is not provided, return the
// first element.
// Example -
// firstNElements([7, 9, 0, -2]),1) => [7]
// firstNElements([],3) => []
// firstNElements([7, 9, 0, -2],6) => [7, 9, 0, -2]
// firstNElements([7, 9, 0, -2]) => [7]

const prompt = require("prompt-sync")();

//Accepting input

let arr = prompt("Enter elements of the array ").split(",");
let newArray = [];

//If the array is not empty
if (arr != "") {
  for (num in arr) {
    newArray.push(parseInt(arr[num]));
  }
}

let n = prompt("Enter number of elements ") || null;

function firstNumber(arr, n) {
  if (arr.length == 0) {
    return arr;
  } else if (n == null) {
    return "[ " + arr[0] + " ]";
  } else {
    return arr.slice(0, n);
  }
}

console.log(firstNumber(newArray, n));

// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_4.js
// Enter elements of the array 7,9,0,-2
// [ 7, 9, 0, -2 ]
// Enter number of elements 1
// [ 7 ]
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_4.js
// Enter elements of the array
// Enter number of elements 3
// []
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_4.js
// Enter elements of the array 7,9,0,-2
// [ 7, 9, 0, -2 ]
// Enter number of elements 6
// [ 7, 9, 0, -2 ]
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_4.js
// Enter elements of the array 7,9,0,-2
// [ 7, 9, 0, -2 ]
// Enter number of elements
// [ 7 ]
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises>
