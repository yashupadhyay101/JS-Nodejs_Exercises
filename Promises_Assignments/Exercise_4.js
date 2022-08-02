//Make api call to https://api.github.com/gists/public and diplay the number of files each gist has

const axios = require('axios').default;


function makeAPICall(url) {
    axios.get(url)
    .then(response => {
        console.log(response.data.map(e => {
            //const keys = ;
            return {
                id : e.id,
                count : Object.keys(e.files).length
            }}));
    })
    .catch(error => {
        console.log(error);
    })

}

makeAPICall("https://api.github.com/gists/public");

//Output

// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments % node Exercise_4.js
// [
//   { id: '9355e2772db5010d58b726f91fcc69d3', count: 1 },
//   { id: 'de3b9cb67470e0c4b11e0e094d494bf0', count: 1 },
//   { id: 'b24f5c01ea586c08c10bef96e5ffb090', count: 1 },
//   { id: '89f102bff1a5bc5b8c9aff33cbf555d8', count: 1 },
//   { id: '151675c7b7389ddd93c4b3b2623c191a', count: 1 },
//   { id: '6637de5116e9174a8570edfe49099b10', count: 1 },
//   { id: 'e396457feb97a2ccb24fc1938fa604c3', count: 1 },
//   { id: 'dbad3f8df36d6b30cd9f73c54f4be356', count: 1 },
//   { id: '38c68fa5fbedeed047ba12d586e3c41e', count: 1 },
//   { id: 'c4c088f1f18569a218109f36e1397aaf', count: 1 },
//   { id: '74e540054264c93d56430f53b57f9a7e', count: 1 },
//   { id: '4dcd56f6f6c1e684e387d991c281bc04', count: 1 },
//   { id: '043b9a7a1ee16daf33ab2d211781248a', count: 1 },
//   { id: '350dc337a00135a82db64297aa48a322', count: 1 },
//   { id: '64620feccd0042b1039b2f4e972b3d57', count: 1 },
//   { id: '92f049c95f2ed14d34719dd9bc4074b5', count: 1 },
//   { id: '24fbe1182e77e2dbaad287cf751d2634', count: 1 },
//   { id: 'e44fe05fe34543b9eb19f05cc22a5d1c', count: 3 },
//   { id: '0e6cc5d90b121c0cab1b76efbebee4a5', count: 1 },
//   { id: '7375fb32cb56e7bcd3d999e54bc84cbc', count: 1 },
//   { id: '56608eb5acea2bcd92ed1de46e15a23b', count: 1 },
//   { id: '317c1b737a5c090792fdb029947a03cb', count: 1 },
//   { id: 'b5f90a64a952d77b2b923514034e8127', count: 1 },
//   { id: '1b58995b8ae0cafc2c4f5b4549931752', count: 1 },
//   { id: '19f3768b7233d12b941c966a80ad8bcd', count: 1 },
//   { id: 'a914d305e9bd9fe75fadd6dce43159b2', count: 1 },
//   { id: '5daac2bfedd6fed0546a78c0a4d8b303', count: 2 },
//   { id: 'cd64a58fa3d4b94a5991fa6436cf7b59', count: 1 },
//   { id: '92a0ee0a7e6e78463a92e5cb83a3d823', count: 1 },
//   { id: '6259781c2ea03097f00387678df4208c', count: 1 }
// ]
// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments % 