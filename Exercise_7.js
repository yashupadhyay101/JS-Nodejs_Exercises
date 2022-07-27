// Write a program to find the most frequent item of an array.
// mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) => a (5
// times)

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let maxFreq = 0;
let counter = 0;
let value;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) counter++;
    if (maxFreq < counter) {
      maxFreq = counter;
      value = arr[i];
    }
  }
  counter = 0;
}
console.log(`${value} ( ${maxFreq} times)`);

// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_7.js
// a ( 5 times)
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises>
