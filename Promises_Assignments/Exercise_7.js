// Fetch exactly 35 gists and list every unique username that has made changes in each gists history
// API docs - https://docs.github.com/en/rest/gists/gists#list-public-gists

// use public gists api and get a gist api. (Some api calls in the docs require Authentication. You won't need to call them any way)

const axios = require("axios").default;

// function makeAPICall(url) {
//   axios
//     .get(url, { params: { per_page: 35 } })
//     .then((result) => {
//       const mySet = new Set();
//       result.data.map((e) => {
//         mySet.add(e.owner.login);
//       });
//       console.log(mySet);
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//     });
// }

// makeAPICall("https://api.github.com/gists/public");

var auth_token = "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";

const getPublicGist = async () => {
  return await axios.get("https://api.github.com/gists/public", {
    params: { per_page: 35 },
    headers: { Authorization: `token ${auth_token}` },
  });
};

const getSingleGist = async (gist_id) => {
  return await axios.get("https://api.github.com/gists/" + gist_id, {
    headers: { Authorization: `token ${auth_token}` },
  });
};

const getUniqueUsername = async () => {
  try {
    const publicGist = await getPublicGist();
    const listOfUsers = [];
    for (const gist of publicGist.data) {
      const uniqueUsers = new Set();
      uniqueUsers.clear();
      const singleGist = await getSingleGist(gist.id);
      singleGist.data.history.map((e) => {
        uniqueUsers.add(e.user.login);
      });
      listOfUsers.push(Array.from(uniqueUsers));
    }
    return listOfUsers;
  } catch (error) {
    return error;
  }
};

getUniqueUsername()
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error);
  });

//Output

// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments % node Exercise_7.js
// Set(28) {
//   'Untrusted-Game',
//   'HugsLibRecordKeeper',
//   'lum1narie',
//   'OussamaBATOUCHE',
//   'arnabkd',
//   'wjdwnwbel',
//   'miztiik',
//   'kumasumit',
//   'vivekkhandelwal1',
//   'kajalj3098',
//   'kat0h',
//   'GrahamcOfBorg',
//   'RussCoding',
//   'pashri',
//   'ActorExpose',
//   'rajat1411',
//   'minrk',
//   'javierlopezdeancos',
//   'adegbengaagoro',
//   'cmbaughman',
//   'sonusingh-ab',
//   'gekka',
//   'gurolca',
//   'hiroppe',
//   'AlexandruCalinica',
//   'object1985',
//   'radupotop',
//   'p014ri5'
// }
// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments %
