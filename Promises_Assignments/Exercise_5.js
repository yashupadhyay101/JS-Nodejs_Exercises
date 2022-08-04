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

const getData = async (url) => {
  const response = await axios.get(url);
  return response;
};

const getuserWithDomainORG = (jsonData) => {
  return jsonData.data.filter((e) => e.email.includes(".org"));
};

const getAddtionalUserInfo = (jsonData) => {
  const userInfo = JSON.parse(JSON.stringify(jsonData.data));
  return userInfo.map((e) => {
    e["userInfo"] = {
      fullName: e.name,
      username: e.username,
      emailId: e.email,
      timeStamp: Date.now(),
    };
    return e;
  });
};

const getuserWithSpecificEmail = (jsonData, email) => {
  return jsonData.data.filter((e) => e.email === email);
};

const getSumOfAllIds = (jsonData) => {
  return jsonData.data.reduce((acc, obj) => {
    return acc + obj.id;
  }, 0);
};

const getPairUsernameEmail = (jsonData) => {
  return jsonData.data.reduce((acc, obj) => {
    acc[obj.username] = obj.email;
    return acc;
  }, {});
};

const getAssignmentsDone = async (url, email) => {
  try {
    const jsonData = await getData(url);
    const userWithDomainORG = getuserWithDomainORG(jsonData);
    const addtionalUserInfo = getAddtionalUserInfo(jsonData);
    const userWithSpecificEmail = getuserWithSpecificEmail(jsonData, email);
    const sumOfAllIds = getSumOfAllIds(jsonData);
    const pairUsernameEmail = getPairUsernameEmail(jsonData);

    const result = await Promise.all([
      userWithDomainORG,
      addtionalUserInfo,
      userWithSpecificEmail,
      sumOfAllIds,
      pairUsernameEmail,
    ]);
    return result;
  } catch (error) {
    return error;
  }
};

getAssignmentsDone(
  "https://jsonplaceholder.typicode.com/users",
  "Nathan@yesenia.net"
)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("We got a problem..", error);
  });

// Output

// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments % node Exercise_5.js
// [
//   [
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       address: [Object],
//       phone: '493-170-9623 x156',
//       website: 'kale.biz',
//       company: [Object]
//     }
//   ],
//   [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       address: [Object],
//       phone: '1-770-736-8031 x56442',
//       website: 'hildegard.org',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       address: [Object],
//       phone: '010-692-6593 x09125',
//       website: 'anastasia.net',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       address: [Object],
//       phone: '1-463-123-4447',
//       website: 'ramiro.info',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       address: [Object],
//       phone: '493-170-9623 x156',
//       website: 'kale.biz',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 5,
//       name: 'Chelsey Dietrich',
//       username: 'Kamren',
//       email: 'Lucio_Hettinger@annie.ca',
//       address: [Object],
//       phone: '(254)954-1289',
//       website: 'demarco.info',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 6,
//       name: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       email: 'Karley_Dach@jasper.info',
//       address: [Object],
//       phone: '1-477-935-8478 x6430',
//       website: 'ola.org',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 7,
//       name: 'Kurtis Weissnat',
//       username: 'Elwyn.Skiles',
//       email: 'Telly.Hoeger@billy.biz',
//       address: [Object],
//       phone: '210.067.6132',
//       website: 'elvis.io',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 8,
//       name: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       email: 'Sherwood@rosamond.me',
//       address: [Object],
//       phone: '586.493.6943 x140',
//       website: 'jacynthe.com',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 9,
//       name: 'Glenna Reichert',
//       username: 'Delphine',
//       email: 'Chaim_McDermott@dana.io',
//       address: [Object],
//       phone: '(775)976-6794 x41206',
//       website: 'conrad.com',
//       company: [Object],
//       userInfo: [Object]
//     },
//     {
//       id: 10,
//       name: 'Clementina DuBuque',
//       username: 'Moriah.Stanton',
//       email: 'Rey.Padberg@karina.biz',
//       address: [Object],
//       phone: '024-648-3804',
//       website: 'ambrose.net',
//       company: [Object],
//       userInfo: [Object]
//     }
//   ],
//   [
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       address: [Object],
//       phone: '1-463-123-4447',
//       website: 'ramiro.info',
//       company: [Object]
//     }
//   ],
//   55,
//   {
//     Bret: 'Sincere@april.biz',
//     Antonette: 'Shanna@melissa.tv',
//     Samantha: 'Nathan@yesenia.net',
//     Karianne: 'Julianne.OConner@kory.org',
//     Kamren: 'Lucio_Hettinger@annie.ca',
//     Leopoldo_Corkery: 'Karley_Dach@jasper.info',
//     'Elwyn.Skiles': 'Telly.Hoeger@billy.biz',
//     Maxime_Nienow: 'Sherwood@rosamond.me',
//     Delphine: 'Chaim_McDermott@dana.io',
//     'Moriah.Stanton': 'Rey.Padberg@karina.biz'
//   }
// ]
// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments %
