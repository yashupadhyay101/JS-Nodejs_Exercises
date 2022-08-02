//Make api call to https://api.github.com/gists/public and  display only id, owner_id, owner_login, owner_url, filename, filesize


const axios = require('axios').default;


function makeAPICall(url) {
    axios.get(url)
    .then(response => {
        console.log(response.data.map(e => {
            return {
                id : e.id,
                owner_id : e.owner.id,
                owner_login : e.owner.login,
                owner_url : e.owner.url,
                filename : Object.keys(e.files).map(key => {
                    return e.files[key].filename 
                }),
                filesize : Object.keys(e.files).map(key => {
                    return e.files[key].size 
                })
            }}));
    })
    .catch(error => {
        console.log(error);
    })

}

makeAPICall("https://api.github.com/gists/public");


//Output

// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments % node Exercise_3.js
// [
//   {
//     id: '38c68fa5fbedeed047ba12d586e3c41e',
//     owner_id: 65227842,
//     owner_login: 'jfgrimm',
//     owner_url: 'https://api.github.com/users/jfgrimm',
//     filename: [
//       'easybuild_test_report_15946_easybuilders_preasybuild-easyconfigs_20225202-UTC-12-52-22.md'
//     ],
//     filesize: [ 22128 ]
//   },
//   {
//     id: 'c4c088f1f18569a218109f36e1397aaf',
//     owner_id: 109097303,
//     owner_login: 'henriquesousazup',
//     owner_url: 'https://api.github.com/users/henriquesousazup',
//     filename: [ 'Sala.java' ],
//     filesize: [ 1065 ]
//   },
//   {
//     id: '74e540054264c93d56430f53b57f9a7e',
//     owner_id: 4618350,
//     owner_login: 'Maqentaer',
//     owner_url: 'https://api.github.com/users/Maqentaer',
//     filename: [ 'Voicemeter_Cracking_Fix.ps1' ],
//     filesize: [ 448 ]
//   },
//   {
//     id: '4dcd56f6f6c1e684e387d991c281bc04',
//     owner_id: 2646053,
//     owner_login: 'bobbyg603',
//     owner_url: 'https://api.github.com/users/bobbyg603',
//     filename: [ 'app.component.html' ],
//     filesize: [ 23 ]
//   },
//   {
//     id: '043b9a7a1ee16daf33ab2d211781248a',
//     owner_id: 60175876,
//     owner_login: 'yulian-khalitov',
//     owner_url: 'https://api.github.com/users/yulian-khalitov',
//     filename: [ 'env-minto-bridge' ],
//     filesize: [ 685 ]
//   },
//   {
//     id: '350dc337a00135a82db64297aa48a322',
//     owner_id: 37552839,
//     owner_login: 'nikspandya',
//     owner_url: 'https://api.github.com/users/nikspandya',
//     filename: [ 'typescript-crash.ts' ],
//     filesize: [ 2136 ]
//   },
//   {
//     id: '64620feccd0042b1039b2f4e972b3d57',
//     owner_id: 40776764,
//     owner_login: 'aaravm4',
//     owner_url: 'https://api.github.com/users/aaravm4',
//     filename: [ 'fifa19.py' ],
//     filesize: [ 2122 ]
//   },
//   {
//     id: '92f049c95f2ed14d34719dd9bc4074b5',
//     owner_id: 87984206,
//     owner_login: 'jk-secrutiny',
//     owner_url: 'https://api.github.com/users/jk-secrutiny',
//     filename: [ 'SIEMple_SIEM_questionnaire_and_tests.md' ],
//     filesize: [ 11450 ]
//   },
//   {
//     id: '24fbe1182e77e2dbaad287cf751d2634',
//     owner_id: 4409627,
//     owner_login: 'kivancbilen',
//     owner_url: 'https://api.github.com/users/kivancbilen',
//     filename: [ 'lambda_ws.ts' ],
//     filesize: [ 1721 ]
//   },
//   {
//     id: 'e44fe05fe34543b9eb19f05cc22a5d1c',
//     owner_id: 5033303,
//     owner_login: 'josefaidt',
//     owner_url: 'https://api.github.com/users/josefaidt',
//     filename: [ 'cdk-simple-lambda.ts', 'handler.ts', 'tsconfig.json' ],
//     filesize: [ 663, 278, 622 ]
//   },
//   {
//     id: '0e6cc5d90b121c0cab1b76efbebee4a5',
//     owner_id: 5351691,
//     owner_login: 'nakamura196',
//     owner_url: 'https://api.github.com/users/nakamura196',
//     filename: [ 'manifest.json' ],
//     filesize: [ 9778 ]
//   },
//   {
//     id: '7375fb32cb56e7bcd3d999e54bc84cbc',
//     owner_id: 110470373,
//     owner_login: 'RajeshProject',
//     owner_url: 'https://api.github.com/users/RajeshProject',
//     filename: [ 'main.dart' ],
//     filesize: [ 40 ]
//   },
//   {
//     id: '56608eb5acea2bcd92ed1de46e15a23b',
//     owner_id: 96243610,
//     owner_login: 'khuonglan',
//     owner_url: 'https://api.github.com/users/khuonglan',
//     filename: [ 'style8.py' ],
//     filesize: [ 227 ]
//   },
//   {
//     id: '317c1b737a5c090792fdb029947a03cb',
//     owner_id: 22309227,
//     owner_login: 'PriCampos',
//     owner_url: 'https://api.github.com/users/PriCampos',
//     filename: [ 'estrategia-teste-api.csv' ],
//     filesize: [ 1817 ]
//   },
//   {
//     id: 'b5f90a64a952d77b2b923514034e8127',
//     owner_id: 25447658,
//     owner_login: 'GrahamcOfBorg',
//     owner_url: 'https://api.github.com/users/GrahamcOfBorg',
//     filename: [ 'Potential Maintainers' ],
//     filesize: [ 13 ]
//   },
//   {
//     id: '1b58995b8ae0cafc2c4f5b4549931752',
//     owner_id: 25447658,
//     owner_login: 'GrahamcOfBorg',
//     owner_url: 'https://api.github.com/users/GrahamcOfBorg',
//     filename: [ 'Changed Paths' ],
//     filesize: [ 293338 ]
//   },
//   {
//     id: '19f3768b7233d12b941c966a80ad8bcd',
//     owner_id: 25447658,
//     owner_login: 'GrahamcOfBorg',
//     owner_url: 'https://api.github.com/users/GrahamcOfBorg',
//     filename: [ 'Potential Maintainers' ],
//     filesize: [ 58 ]
//   },
//   {
//     id: 'a914d305e9bd9fe75fadd6dce43159b2',
//     owner_id: 25447658,
//     owner_login: 'GrahamcOfBorg',
//     owner_url: 'https://api.github.com/users/GrahamcOfBorg',
//     filename: [ 'Changed Paths' ],
//     filesize: [ 91 ]
//   },
//   {
//     id: '5daac2bfedd6fed0546a78c0a4d8b303',
//     owner_id: 375723,
//     owner_login: 'Chralu',
//     owner_url: 'https://api.github.com/users/Chralu',
//     filename: [ 'main.dart', 'readme.md' ],
//     filesize: [ 1779, 86 ]
//   },
//   {
//     id: 'cd64a58fa3d4b94a5991fa6436cf7b59',
//     owner_id: 99993452,
//     owner_login: 'GuilhermeKvet',
//     owner_url: 'https://api.github.com/users/GuilhermeKvet',
//     filename: [ 'i18n.json' ],
//     filesize: [ 120 ]
//   },
//   {
//     id: '92a0ee0a7e6e78463a92e5cb83a3d823',
//     owner_id: 110470869,
//     owner_login: 'Sabr45',
//     owner_url: 'https://api.github.com/users/Sabr45',
//     filename: [ 'gid:xxhBcTrE3GPH6KXjm6Umgh' ],
//     filesize: [ 26 ]
//   },
//   {
//     id: '6259781c2ea03097f00387678df4208c',
//     owner_id: 68062695,
//     owner_login: 'rwp0',
//     owner_url: 'https://api.github.com/users/rwp0',
//     filename: [ 'move_sheet.google.js' ],
//     filesize: [ 385 ]
//   },
//   {
//     id: 'afa3b8c0e14a53553b8697989cfe2b40',
//     owner_id: 37045296,
//     owner_login: 'baichen99',
//     owner_url: 'https://api.github.com/users/baichen99',
//     filename: [ 'extract.py', 'test.py', 'test.txt' ],
//     filesize: [ 353, 355, 2369 ]
//   },
//   {
//     id: '7627b2433ed37dfcbce9a0a718f75b34',
//     owner_id: 6004562,
//     owner_login: 'mjohnson025',
//     owner_url: 'https://api.github.com/users/mjohnson025',
//     filename: [ 'keybase.md' ],
//     filesize: [ 2145 ]
//   },
//   {
//     id: 'ca659e464e11ebd54c722e578b3889a1',
//     owner_id: 23506375,
//     owner_login: 'HugsLibRecordKeeper',
//     owner_url: 'https://api.github.com/users/HugsLibRecordKeeper',
//     filename: [ 'output_log.txt' ],
//     filesize: [ 232090 ]
//   },
//   {
//     id: 'cf482a8e4423aa13a92192c495b9bab2',
//     owner_id: 23506375,
//     owner_login: 'HugsLibRecordKeeper',
//     owner_url: 'https://api.github.com/users/HugsLibRecordKeeper',
//     filename: [ 'output_log.txt' ],
//     filesize: [ 726656 ]
//   },
//   {
//     id: 'd8730eb37877833ce254186976844a3f',
//     owner_id: 110227689,
//     owner_login: 'ShubhangTripathi',
//     owner_url: 'https://api.github.com/users/ShubhangTripathi',
//     filename: [ 'text_file.txt' ],
//     filesize: [ 13 ]
//   },
//   {
//     id: '5805f5dceb1bed1a3999677ee8ec4816',
//     owner_id: 29951306,
//     owner_login: 'chongshenng',
//     owner_url: 'https://api.github.com/users/chongshenng',
//     filename: [ 'K3sInstallationNotes.md' ],
//     filesize: [ 6020 ]
//   },
//   {
//     id: '61ef2969e5b7bd91ef6f88be8aafa60a',
//     owner_id: 96243610,
//     owner_login: 'khuonglan',
//     owner_url: 'https://api.github.com/users/khuonglan',
//     filename: [ 'style7.py' ],
//     filesize: [ 233 ]
//   },
//   {
//     id: '1326528a30c80cedc233c05faf8703d9',
//     owner_id: 23506375,
//     owner_login: 'HugsLibRecordKeeper',
//     owner_url: 'https://api.github.com/users/HugsLibRecordKeeper',
//     filename: [ 'output_log.txt' ],
//     filesize: [ 82795 ]
//   }
// ]