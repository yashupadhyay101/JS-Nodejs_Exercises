// Write a function that returns the left rotated array based on the number of rotations as input.

// Example-
// Input => rotateLeftByInput([1,2,3,4,5],3) => [4,5,1,2,3]

const prompt = require("prompt-sync")();

//Accepting input

let arr = Array.from(prompt("Enter elements of the array ").split(","), Number);
let k = prompt("Enter number of rotations ");

//shift() takes and remove the first element from the array and push function adds the element at the end.
function rotate(arr) {
  arr.push(arr.shift());
}

function rotateLeftByInput(arr, k) {
  //For handling the case where we get k as a negative number
  k = k % arr.length;
  if (k < 0) {
    k = k + arr.length;
  }
  for (let i = 0; i < k; i++) {
    rotate(arr);
  }
  console.log(arr);
}

rotateLeftByInput(arr, k);

// Input - Enter elements of the array 1,2,3,4,5
//         Enter number of rotations 3
// Output - [ 4, 5, 1, 2, 3 ]
