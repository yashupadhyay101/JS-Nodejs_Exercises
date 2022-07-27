// 8. Flatten all the data in the input.json file attached into following structure:
// Only the key-value pairs given below should be present in the output, rest can be deleted.
// [
// {
// "userId": 1,
// "fullName": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address_street": "Kulas Light",
// "address_suite": "Apt. 556",
// "city": "Gwenborough",
// "zipcode": "92998-3874",
// "latitude": "-37.3159",
// "longitude": "81.1496"
// }
// ]
//convert(inputArray) => flattenOutput

const jsonData = require("./input.json");

//console.log(jsonData[0]);

const obj = jsonData[0];

["phone", "website", "company"].forEach((e) => delete obj[e]);

const newObj = {};
const flattenJSON = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] == "object") {
      flattenJSON(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
};

flattenJSON(obj);

console.log(newObj);

//  PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_8.js
// {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   street: 'Kulas Light',
//   suite: 'Apt. 556',
//   city: 'Gwenborough',
//   zipcode: '92998-3874',
//   lat: '-37.3159',
//   lng: '81.1496'
// }
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises>
