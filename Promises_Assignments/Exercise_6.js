// 1. Get all users: https://jsonplaceholder.typicode.com/users
// 2. get post per user: https://jsonplaceholder.typicode.com/posts?userId=<userId>
// 3. Desired Object for each post:
// [
// 	{
// 	   "userId": 1,
// 	   "postId": 1,
// 	   "title": "et ea vero quia laudantium autem",
// 	   "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
// 	   "name": "Leanne Graham",
// 	   "username": "Bret",
// 	   "email": "Sincere@april.biz",
// 	   "city": "Gwenborough",
// 		  "zipcode": "92998-3874",
// 	   "phone": "1-770-736-8031 x56442",
// 	   "website": "hildegard.org",
// 	   "company": "Romaguera-Crona"
// 	}
// ...]

const axios = require("axios").default;

async function getPostPerUser(url1, url2) {
  axios
    .get(url1)
    .then((response) => {
      const data = response.data;
      for (let i = 1; i <= data.length; i++) {
        axios.get(url2 + i).then((result) => {
          console.log(
            result.data.map((e) => {
              return {
                userId: e.userId,
                postId: e.id,
                title: e.title,
                body: e.body,
                name: data[i - 1].name,
                username: data[i - 1].username,
                email: data[i - 1].email,
                city: data[i - 1].address.city,
                zipcode: data[i - 1].address.zipcode,
                phone: data[i - 1].phone,
                website: data[i - 1].website,
                company: data[i - 1].company,
              };
            })
          );
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

getPostPerUser(
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts?userId="
);

//Output

// {
//     userId: 4,
//     postId: 34,
//     title: 'magnam ut rerum iure',
//     body: 'ea velit perferendis earum ut voluptatem voluptate itaque iusto\n' +
//       'totam pariatur in\n' +
//       'nemo voluptatem voluptatem autem magni tempora minima in\n' +
//       'est distinctio qui assumenda accusamus dignissimos officia nesciunt nobis',
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     city: 'South Elvis',
//     zipcode: '53919-4257',
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   },
//   {
//     userId: 4,
//     postId: 35,
//     title: 'id nihil consequatur molestias animi provident',
//     body: 'nisi error delectus possimus ut eligendi vitae\n' +
//       'placeat eos harum cupiditate facilis reprehenderit voluptatem beatae\n' +
//       'modi ducimus quo illum voluptas eligendi\n' +
//       'et nobis quia fugit',
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     city: 'South Elvis',
//     zipcode: '53919-4257',
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   },
//   {
//     userId: 4,
//     postId: 36,
//     title: 'fuga nam accusamus voluptas reiciendis itaque',
//     body: 'ad mollitia et omnis minus architecto odit\n' +
//       'voluptas doloremque maxime aut non ipsa qui alias veniam\n' +
//       'blanditiis culpa aut quia nihil cumque facere et occaecati\n' +
//       'qui aspernatur quia eaque ut aperiam inventore',
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     city: 'South Elvis',
//     zipcode: '53919-4257',
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   },
//   {
//     userId: 4,
//     postId: 37,
//     title: 'provident vel ut sit ratione est',
//     body: 'debitis et eaque non officia sed nesciunt pariatur vel\n' +
//       'voluptatem iste vero et ea\n' +
//       'numquam aut expedita ipsum nulla in\n' +
//       'voluptates omnis consequatur aut enim officiis in quam qui',
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     city: 'South Elvis',
//     zipcode: '53919-4257',
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   },
//   {
//     userId: 4,
//     postId: 38,
//     title: 'explicabo et eos deleniti nostrum ab id repellendus',
//     body: 'animi esse sit aut sit nesciunt assumenda eum voluptas\n' +
//       'quia voluptatibus provident quia necessitatibus ea\n' +
//       'rerum repudiandae quia voluptatem delectus fugit aut id quia\n' +
//       'ratione optio eos iusto veniam iure',
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     city: 'South Elvis',
//     zipcode: '53919-4257',
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   },
