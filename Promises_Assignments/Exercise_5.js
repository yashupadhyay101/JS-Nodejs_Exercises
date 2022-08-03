// Call the api: https://jsonplaceholder.typicode.com/users and perform these operations for the data recieved:
// 1. Find all users with website having .org domain.
// 2. For each user, add this additional custom json object:- userInfo : { "fullName": "Clementine Bauch", "username": "Samantha", "emailId": "Nathan@yesenia.net", timeStamp : <currentTime>}
// 3. Find user with email id = Nathan@yesenia.net
// 4. (use reduce) Print summation of all user ids.
// 5. (use reduce) Form a key value pair in the format of {<username> : <email>} Print a single object with this info for all the users. Example:
// 	{
// 		"Bret": "Sincere@april.biz",
// 		"Antonette" : "Shanna@melissa.tv",
// 		....
// 	}
// Use filter, find, map, reduce to perform the above 5 tasks.

const axios = require("axios").default;

function makeAPICall(url) {
  axios
    .get(url)
    .then((result) => {
      const responseCopy = JSON.parse(JSON.stringify(result.data));
      console.log("1. Find all users with website having .org domain.");
      console.log(responseCopy.filter((e) => e.email.includes(".org")));
      return result.data;
    })
    .then((result) => {
      const responseCopy = JSON.parse(JSON.stringify(result));
      console.log(
        '2. For each user, add this additional custom json object:- userInfo : { "fullName": "Clementine Bauch", "username": "Samantha", "emailId": "Nathan@yesenia.net", timeStamp : <currentTime>}'
      );
      console.log(
        responseCopy.map((e) => {
          e["userInfo"] = {
            fullName: e.name,
            username: e.username,
            emailId: e.email,
            timeStamp: Date.now(),
          };
          return e;
        })
      );
      return result;
    })
    .then((result) => {
      console.log("3. Find user with email id = Nathan@yesenia.net");
      console.log(result.filter((e) => e.email === "Nathan@yesenia.net"));
      return result;
    })
    .then((result) => {
      const responseCopy = JSON.parse(JSON.stringify(result));
      console.log("4. (use reduce) Print summation of all user ids.");
      console.log(
        responseCopy.reduce((acc, obj) => {
          return acc + obj.id;
        }, 0)
      );
      return result;
    })
    .then((result) => {
      console.log(`5. (use reduce) Form a key value pair in the format of {<username> : <email>} Print a single object with this info for all the users. Example:
        {
            "Bret": "Sincere@april.biz",
            "Antonette" : "Shanna@melissa.tv",
            ....
        }`);
      console.log(
        result.reduce((acc, obj) => {
          acc[obj.username] = obj.email;
          return acc;
        }, {})
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

makeAPICall("https://jsonplaceholder.typicode.com/users");

// Output

// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments % node Exercise_5.js
// 1. Find all users with website having .org domain.
// [
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: [Object]
//     },
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   }
// ]
// 2. For each user, add this additional custom json object:- userInfo : { "fullName": "Clementine Bauch", "username": "Samantha", "emailId": "Nathan@yesenia.net", timeStamp : <currentTime>}
// [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: [Object]
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     },
//     userInfo: {
//       fullName: 'Leanne Graham',
//       username: 'Bret',
//       emailId: 'Sincere@april.biz',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: [Object]
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains'
//     },
//     userInfo: {
//       fullName: 'Ervin Howell',
//       username: 'Antonette',
//       emailId: 'Shanna@melissa.tv',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: [Object]
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications'
//     },
//     userInfo: {
//       fullName: 'Clementine Bauch',
//       username: 'Samantha',
//       emailId: 'Nathan@yesenia.net',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: [Object]
//     },
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     },
//     userInfo: {
//       fullName: 'Patricia Lebsack',
//       username: 'Karianne',
//       emailId: 'Julianne.OConner@kory.org',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: [Object]
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems'
//     },
//     userInfo: {
//       fullName: 'Chelsey Dietrich',
//       username: 'Kamren',
//       emailId: 'Lucio_Hettinger@annie.ca',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@jasper.info',
//     address: {
//       street: 'Norberto Crossing',
//       suite: 'Apt. 950',
//       city: 'South Christy',
//       zipcode: '23505-1337',
//       geo: [Object]
//     },
//     phone: '1-477-935-8478 x6430',
//     website: 'ola.org',
//     company: {
//       name: 'Considine-Lockman',
//       catchPhrase: 'Synchronised bottom-line interface',
//       bs: 'e-enable innovative applications'
//     },
//     userInfo: {
//       fullName: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       emailId: 'Karley_Dach@jasper.info',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 7,
//     name: 'Kurtis Weissnat',
//     username: 'Elwyn.Skiles',
//     email: 'Telly.Hoeger@billy.biz',
//     address: {
//       street: 'Rex Trail',
//       suite: 'Suite 280',
//       city: 'Howemouth',
//       zipcode: '58804-1099',
//       geo: [Object]
//     },
//     phone: '210.067.6132',
//     website: 'elvis.io',
//     company: {
//       name: 'Johns Group',
//       catchPhrase: 'Configurable multimedia task-force',
//       bs: 'generate enterprise e-tailers'
//     },
//     userInfo: {
//       fullName: 'Kurtis Weissnat',
//       username: 'Elwyn.Skiles',
//       emailId: 'Telly.Hoeger@billy.biz',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 8,
//     name: 'Nicholas Runolfsdottir V',
//     username: 'Maxime_Nienow',
//     email: 'Sherwood@rosamond.me',
//     address: {
//       street: 'Ellsworth Summit',
//       suite: 'Suite 729',
//       city: 'Aliyaview',
//       zipcode: '45169',
//       geo: [Object]
//     },
//     phone: '586.493.6943 x140',
//     website: 'jacynthe.com',
//     company: {
//       name: 'Abernathy Group',
//       catchPhrase: 'Implemented secondary concept',
//       bs: 'e-enable extensible e-tailers'
//     },
//     userInfo: {
//       fullName: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       emailId: 'Sherwood@rosamond.me',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 9,
//     name: 'Glenna Reichert',
//     username: 'Delphine',
//     email: 'Chaim_McDermott@dana.io',
//     address: {
//       street: 'Dayna Park',
//       suite: 'Suite 449',
//       city: 'Bartholomebury',
//       zipcode: '76495-3109',
//       geo: [Object]
//     },
//     phone: '(775)976-6794 x41206',
//     website: 'conrad.com',
//     company: {
//       name: 'Yost and Sons',
//       catchPhrase: 'Switchable contextually-based project',
//       bs: 'aggregate real-time technologies'
//     },
//     userInfo: {
//       fullName: 'Glenna Reichert',
//       username: 'Delphine',
//       emailId: 'Chaim_McDermott@dana.io',
//       timeStamp: 1659529196349
//     }
//   },
//   {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//       street: 'Kattie Turnpike',
//       suite: 'Suite 198',
//       city: 'Lebsackbury',
//       zipcode: '31428-2261',
//       geo: [Object]
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//       name: 'Hoeger LLC',
//       catchPhrase: 'Centralized empowering task-force',
//       bs: 'target end-to-end models'
//     },
//     userInfo: {
//       fullName: 'Clementina DuBuque',
//       username: 'Moriah.Stanton',
//       emailId: 'Rey.Padberg@karina.biz',
//       timeStamp: 1659529196349
//     }
//   }
// ]
// 3. Find user with email id = Nathan@yesenia.net
// [
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: [Object]
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications'
//     }
//   }
// ]
// 4. (use reduce) Print summation of all user ids.
// 55
// 5. (use reduce) Form a key value pair in the format of {<username> : <email>} Print a single object with this info for all the users. Example:
//         {
//             "Bret": "Sincere@april.biz",
//             "Antonette" : "Shanna@melissa.tv",
//             ....
//         }
// {
//   Bret: 'Sincere@april.biz',
//   Antonette: 'Shanna@melissa.tv',
//   Samantha: 'Nathan@yesenia.net',
//   Karianne: 'Julianne.OConner@kory.org',
//   Kamren: 'Lucio_Hettinger@annie.ca',
//   Leopoldo_Corkery: 'Karley_Dach@jasper.info',
//   'Elwyn.Skiles': 'Telly.Hoeger@billy.biz',
//   Maxime_Nienow: 'Sherwood@rosamond.me',
//   Delphine: 'Chaim_McDermott@dana.io',
//   'Moriah.Stanton': 'Rey.Padberg@karina.biz'
// }
// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments %
