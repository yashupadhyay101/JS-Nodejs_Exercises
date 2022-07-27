// Write a function that accepts two arrays and returns the missing element from the smaller
// array.
// Example- Input [1,4,2,5,3] and [5,4,1,2] should return 3

"use strict";

const prompt = require("prompt-sync")();

//Accepting input

let arr1 = Array.from(
  prompt("Enter elements of first array ").split(","),
  Number
);
let arr2 = Array.from(
  prompt("Enter elements of second array ").split(","),
  Number
);

//Using filter() inorder to interate over each element in first array and check values which are not present in the second array

function findMissing(arr1, arr2) {
  let missingNumber = arr1.filter((i) => !arr2.includes(i)).join(",");
  return missingNumber;
}

//Comparing lengths of array to find which array is bigger

if (arr1.length >= arr2.length) {
  console.log(findMissing(arr1, arr2));
} else {
  console.log(findMissing(arr2, arr1));
}

// Input - Enter elements of first array 1,2,3,4,5
//         Enter elements of second array 1,2,4,5
// Output - 3
