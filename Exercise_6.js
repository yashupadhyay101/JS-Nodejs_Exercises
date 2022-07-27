// Write a program to print keys and values of the given object.
// input = {
// "a": 1,
// "b" : 2,
// }
// Output=> keys= ["a", "b"], values= [1,2]

const input = {
  a: 1,
  b: 2,
};

let keys = '["' + Object.keys(input).join('", "') + '"]';
let values = "[" + Object.values(input) + "]";
console.log(`keys= ${[keys]}, values = ${values}`);

// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_6.js
// keys= ["a", "b"], values = [1,2]
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises>
