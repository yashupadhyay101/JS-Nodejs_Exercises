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

const jsonData = require('./input.json')

const convert = (jsonData) => {
  return jsonData.map(e => {
      return {
          userId: e.id,
          fullName: e.name,
          username: e.username,
          email: e.email,
          address_street: e.address.street,
          address_suite: e.address.suite,
          city: e.address.city,
          zipcode: e.address.zipcode,
          latitude: e.address.geo.lat,
          longitude: e.address.geo.lng,
      }
  })
}

console.log(convert(jsonData));


// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> node Exercise_8.js
// [
//   {
//     userId: 1,
//     fullName: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address_street: 'Kulas Light',
//     address_suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     latitude: '-37.3159',
//     longitude: '81.1496'
//   },
//   {
//     userId: 2,
//     fullName: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address_street: 'Victor Plains',
//     address_suite: 'Suite 879',
//     city: 'Wisokyburgh',
//     zipcode: '90566-7771',
//     latitude: '-43.9509',
//     longitude: '-34.4618'
//   },
//   {
//     userId: 3,
//     fullName: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address_street: 'Douglas Extension',
//     address_suite: 'Suite 847',
//     city: 'McKenziehaven',
//     zipcode: '59590-4157',
//     latitude: '-68.6102',
//     longitude: '-47.0653'
//   },
//   {
//     userId: 4,
//     fullName: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address_street: 'Hoeger Mall',
//     address_suite: 'Apt. 692',
//     city: 'South Elvis',
//     zipcode: '53919-4257',
//     latitude: '29.4572',
//     longitude: '-164.2990'
//   },
//   {
//     userId: 5,
//     fullName: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address_street: 'Skiles Walks',
//     address_suite: 'Suite 351',
//     city: 'Roscoeview',
//     zipcode: '33263',
//     latitude: '-31.8129',
//     longitude: '62.5342'
//   },
//   {
//     userId: 6,
//     fullName: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@jasper.info',
//     address_street: 'Norberto Crossing',
//     address_suite: 'Apt. 950',
//     city: 'South Christy',
//     zipcode: '23505-1337',
//     latitude: '-71.4197',
//     longitude: '71.7478'
//   },
//   {
//     userId: 7,
//     fullName: 'Kurtis Weissnat',
//     username: 'Elwyn.Skiles',
//     email: 'Telly.Hoeger@billy.biz',
//     address_street: 'Rex Trail',
//     address_suite: 'Suite 280',
//     city: 'Howemouth',
//     zipcode: '58804-1099',
//     latitude: '24.8918',
//     longitude: '21.8984'
//   },
//   {
//     userId: 8,
//     fullName: 'Nicholas Runolfsdottir V',
//     username: 'Maxime_Nienow',
//     email: 'Sherwood@rosamond.me',
//     address_street: 'Ellsworth Summit',
//     address_suite: 'Suite 729',
//     city: 'Aliyaview',
//     zipcode: '45169',
//     latitude: '-14.3990',
//     longitude: '-120.7677'
//   },
//   {
//     userId: 9,
//     fullName: 'Glenna Reichert',
//     username: 'Delphine',
//     email: 'Chaim_McDermott@dana.io',
//     address_street: 'Dayna Park',
//     address_suite: 'Suite 449',
//     city: 'Bartholomebury',
//     zipcode: '76495-3109',
//     latitude: '24.6463',
//     longitude: '-168.8889'
//   },
//   {
//     userId: 10,
//     fullName: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address_street: 'Kattie Turnpike',
//     address_suite: 'Suite 198',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     latitude: '-38.2386',
//     longitude: '57.2232'
//   }
// ]
// PS C:\Users\upadh\Desktop\Assignment\JS-Nodejs_Exercises> 