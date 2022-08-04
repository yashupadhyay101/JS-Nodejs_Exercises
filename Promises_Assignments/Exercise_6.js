// 1. Get all users: https://jsonplaceholder.typicode.com/users
// 2. get post per user: https://jsonplaceholder.typicode.com/posts?userId=<userId>
// 3. Desired Object for each post:
// [
// {
//    "userId": 1,
//    "postId": 1,
//    "title": "et ea vero quia laudantium autem",
//    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
//    "name": "Leanne Graham",
//    "username": "Bret",
//    "email": "Sincere@april.biz",
//    "city": "Gwenborough",
// 	  "zipcode": "92998-3874",
//    "phone": "1-770-736-8031 x56442",
//    "website": "hildegard.org",
//    "company": "Romaguera-Crona"
// }
// ...]

const axios = require("axios").default;
const _ = require("lodash");

const getUsers = async (url) => {
  return await axios.get(url);
};

const getPostList = async (url, id) => {
  return await axios.get(url, { param: { userId: id } });
};

const getPostPerUser = async (urlToGetUser, urlToGetPost) => {
  try {
    const usersList = await getUsers(urlToGetUser);
    const combinedData = [];
    for (const user of usersList.data) {
      const postList = await getPostList(urlToGetPost, user.id);

      const userInfo = {
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        zipcode: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        company: user.company.name,
      };

      const userData = postList.data.map((e) => {
        const changedPostData = JSON.parse(
          JSON.stringify(e).split('"id":').join('"postId":')
        );
        _.assign(changedPostData, userInfo);
        return changedPostData;
      });

      combinedData.push(userData);
    }
    return combinedData;
  } catch (error) {
    return error;
  }
};

getPostPerUser(
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts"
)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("We got a problem..", error);
  });

//Output

// {
//     userId: 9,
//     postId: 83,
//     title: 'odit et voluptates doloribus alias odio et',
//     body: 'est molestiae facilis quis tempora numquam nihil qui\n' +
//       'voluptate sapiente consequatur est qui\n' +
//       'necessitatibus autem aut ipsa aperiam modi dolore numquam\n' +
//       'reprehenderit eius rem quibusdam',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 9,
//     postId: 84,
//     title: 'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut',
//     body: 'sint molestiae magni a et quos\n' +
//       'eaque et quasi\n' +
//       'ut rerum debitis similique veniam\n' +
//       'recusandae dignissimos dolor incidunt consequatur odio',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 9,
//     postId: 85,
//     title: 'dolore veritatis porro provident adipisci blanditiis et sunt',
//     body: 'similique sed nisi voluptas iusto omnis\n' +
//       'mollitia et quo\n' +
//       'assumenda suscipit officia magnam sint sed tempora\n' +
//       'enim provident pariatur praesentium atque animi amet ratione',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 9,
//     postId: 86,
//     title: 'placeat quia et porro iste',
//     body: 'quasi excepturi consequatur iste autem temporibus sed molestiae beatae\n' +
//       'et quaerat et esse ut\n' +
//       'voluptatem occaecati et vel explicabo autem\n' +
//       'asperiores pariatur deserunt optio',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 9,
//     postId: 87,
//     title: 'nostrum quis quasi placeat',
//     body: 'eos et molestiae\n' +
//       'nesciunt ut a\n' +
//       'dolores perspiciatis repellendus repellat aliquid\n' +
//       'magnam sint rem ipsum est',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 9,
//     postId: 88,
//     title: 'sapiente omnis fugit eos',
//     body: 'consequatur omnis est praesentium\n' +
//       'ducimus non iste\n' +
//       'neque hic deserunt\n' +
//       'voluptatibus veniam cum et rerum sed',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 9,
//     postId: 89,
//     title: 'sint soluta et vel magnam aut ut sed qui',
//     body: 'repellat aut aperiam totam temporibus autem et\n' +
//       'architecto magnam ut\n' +
//       'consequatur qui cupiditate rerum quia soluta dignissimos nihil iure\n' +
//       'tempore quas est',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 9,
//     postId: 90,
//     title: 'ad iusto omnis odit dolor voluptatibus',
//     body: 'minus omnis soluta quia\n' +
//       'qui sed adipisci voluptates illum ipsam voluptatem\n' +
//       'eligendi officia ut in\n' +
//       'eos soluta similique molestias praesentium blanditiis',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 91,
//     title: 'aut amet sed',
//     body: 'libero voluptate eveniet aperiam sed\n' +
//       'sunt placeat suscipit molestias\n' +
//       'similique fugit nam natus\n' +
//       'expedita consequatur consequatur dolores quia eos et placeat',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 92,
//     title: 'ratione ex tenetur perferendis',
//     body: 'aut et excepturi dicta laudantium sint rerum nihil\n' +
//       'laudantium et at\n' +
//       'a neque minima officia et similique libero et\n' +
//       'commodi voluptate qui',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 93,
//     title: 'beatae soluta recusandae',
//     body: 'dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\n' +
//       'voluptatem quis enim recusandae ut sed sunt\n' +
//       'nostrum est odit totam\n' +
//       'sit error sed sunt eveniet provident qui nulla',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 94,
//     title: 'qui qui voluptates illo iste minima',
//     body: 'aspernatur expedita soluta quo ab ut similique\n' +
//       'expedita dolores amet\n' +
//       'sed temporibus distinctio magnam saepe deleniti\n' +
//       'omnis facilis nam ipsum natus sint similique omnis',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 95,
//     title: 'id minus libero illum nam ad officiis',
//     body: 'earum voluptatem facere provident blanditiis velit laboriosam\n' +
//       'pariatur accusamus odio saepe\n' +
//       'cumque dolor qui a dicta ab doloribus consequatur omnis\n' +
//       'corporis cupiditate eaque assumenda ad nesciunt',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 96,
//     title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi',
//     body: 'in non odio excepturi sint eum\n' +
//       'labore voluptates vitae quia qui et\n' +
//       'inventore itaque rerum\n' +
//       'veniam non exercitationem delectus aut',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 97,
//     title: 'quas fugiat ut perspiciatis vero provident',
//     body: 'eum non blanditiis soluta porro quibusdam voluptas\n' +
//       'vel voluptatem qui placeat dolores qui velit aut\n' +
//       'vel inventore aut cumque culpa explicabo aliquid at\n' +
//       'perspiciatis est et voluptatem dignissimos dolor itaque sit nam',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 98,
//     title: 'laboriosam dolor voluptates',
//     body: 'doloremque ex facilis sit sint culpa\n' +
//       'soluta assumenda eligendi non ut eius\n' +
//       'sequi ducimus vel quasi\n' +
//       'veritatis est dolores',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 99,
//     title: 'temporibus sit alias delectus eligendi possimus magni',
//     body: 'quo deleniti praesentium dicta non quod\n' +
//       'aut est molestias\n' +
//       'molestias et officia quis nihil\n' +
//       'itaque dolorem quia',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   },
//   {
//     userId: 10,
//     postId: 100,
//     title: 'at nam consequatur ea labore ea harum',
//     body: 'cupiditate quo est a modi nesciunt soluta\n' +
//       'ipsa voluptas error itaque dicta in\n' +
//       'autem qui minus magnam et distinctio eum\n' +
//       'accusamus ratione error aut',
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     city: 'Lebsackbury',
//     zipcode: '31428-2261',
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: 'Hoeger LLC'
//   }
// ]
// ]
// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments %
