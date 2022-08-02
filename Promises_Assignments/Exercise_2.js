// Make api call to https://api.github.com/gists/public and  display 1st 5 results.

const axios = require('axios').default;


function makeAPICall(url) {
    axios.get(url)
    .then(response => {
        console.log(response.data.slice(0,5));
    })
    .catch(error => {
        console.log(error);
    })

}

makeAPICall("https://api.github.com/gists/public");


//Output

// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments % node Exercise_2.js 
// [
//   {
//     url: 'https://api.github.com/gists/4dc755174ebd30fb6f46f1967148eb48',
//     forks_url: 'https://api.github.com/gists/4dc755174ebd30fb6f46f1967148eb48/forks',
//     commits_url: 'https://api.github.com/gists/4dc755174ebd30fb6f46f1967148eb48/commits',
//     id: '4dc755174ebd30fb6f46f1967148eb48',
//     node_id: 'G_kwDOA2kmXNoAIDRkYzc1NTE3NGViZDMwZmI2ZjQ2ZjE5NjcxNDhlYjQ4',
//     git_pull_url: 'https://gist.github.com/4dc755174ebd30fb6f46f1967148eb48.git',
//     git_push_url: 'https://gist.github.com/4dc755174ebd30fb6f46f1967148eb48.git',
//     html_url: 'https://gist.github.com/4dc755174ebd30fb6f46f1967148eb48',
//     files: { 'select2.js': [Object] },
//     public: true,
//     created_at: '2022-08-02T12:56:57Z',
//     updated_at: '2022-08-02T12:56:57Z',
//     description: '',
//     comments: 0,
//     user: null,
//     comments_url: 'https://api.github.com/gists/4dc755174ebd30fb6f46f1967148eb48/comments',
//     owner: {
//       login: 'bilalStudio',
//       id: 57222748,
//       node_id: 'MDQ6VXNlcjU3MjIyNzQ4',
//       avatar_url: 'https://avatars.githubusercontent.com/u/57222748?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/bilalStudio',
//       html_url: 'https://github.com/bilalStudio',
//       followers_url: 'https://api.github.com/users/bilalStudio/followers',
//       following_url: 'https://api.github.com/users/bilalStudio/following{/other_user}',
//       gists_url: 'https://api.github.com/users/bilalStudio/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/bilalStudio/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/bilalStudio/subscriptions',
//       organizations_url: 'https://api.github.com/users/bilalStudio/orgs',
//       repos_url: 'https://api.github.com/users/bilalStudio/repos',
//       events_url: 'https://api.github.com/users/bilalStudio/events{/privacy}',
//       received_events_url: 'https://api.github.com/users/bilalStudio/received_events',
//       type: 'User',
//       site_admin: false
//     },
//     truncated: false
//   },
//   {
//     url: 'https://api.github.com/gists/ce9c9400d5f777557b271aa4e68509d4',
//     forks_url: 'https://api.github.com/gists/ce9c9400d5f777557b271aa4e68509d4/forks',
//     commits_url: 'https://api.github.com/gists/ce9c9400d5f777557b271aa4e68509d4/commits',
//     id: 'ce9c9400d5f777557b271aa4e68509d4',
//     node_id: 'G_kwDOBoGgWNoAIGNlOWM5NDAwZDVmNzc3NTU3YjI3MWFhNGU2ODUwOWQ0',
//     git_pull_url: 'https://gist.github.com/ce9c9400d5f777557b271aa4e68509d4.git',
//     git_push_url: 'https://gist.github.com/ce9c9400d5f777557b271aa4e68509d4.git',
//     html_url: 'https://gist.github.com/ce9c9400d5f777557b271aa4e68509d4',
//     files: { 'Quarto.java': [Object] },
//     public: true,
//     created_at: '2022-08-02T12:56:54Z',
//     updated_at: '2022-08-02T12:56:54Z',
//     description: 'entidade quarto',
//     comments: 0,
//     user: null,
//     comments_url: 'https://api.github.com/gists/ce9c9400d5f777557b271aa4e68509d4/comments',
//     owner: {
//       login: 'thiagonuneszup',
//       id: 109158488,
//       node_id: 'U_kgDOBoGgWA',
//       avatar_url: 'https://avatars.githubusercontent.com/u/109158488?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/thiagonuneszup',
//       html_url: 'https://github.com/thiagonuneszup',
//       followers_url: 'https://api.github.com/users/thiagonuneszup/followers',
//       following_url: 'https://api.github.com/users/thiagonuneszup/following{/other_user}',
//       gists_url: 'https://api.github.com/users/thiagonuneszup/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/thiagonuneszup/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/thiagonuneszup/subscriptions',
//       organizations_url: 'https://api.github.com/users/thiagonuneszup/orgs',
//       repos_url: 'https://api.github.com/users/thiagonuneszup/repos',
//       events_url: 'https://api.github.com/users/thiagonuneszup/events{/privacy}',
//       received_events_url: 'https://api.github.com/users/thiagonuneszup/received_events',
//       type: 'User',
//       site_admin: false
//     },
//     truncated: false
//   },
//   {
//     url: 'https://api.github.com/gists/074a340bee16370e22510f9d908aef1a',
//     forks_url: 'https://api.github.com/gists/074a340bee16370e22510f9d908aef1a/forks',
//     commits_url: 'https://api.github.com/gists/074a340bee16370e22510f9d908aef1a/commits',
//     id: '074a340bee16370e22510f9d908aef1a',
//     node_id: 'G_kwDOAZS4nNoAIDA3NGEzNDBiZWUxNjM3MGUyMjUxMGY5ZDkwOGFlZjFh',
//     git_pull_url: 'https://gist.github.com/074a340bee16370e22510f9d908aef1a.git',
//     git_push_url: 'https://gist.github.com/074a340bee16370e22510f9d908aef1a.git',
//     html_url: 'https://gist.github.com/074a340bee16370e22510f9d908aef1a',
//     files: {
//       'easybuild_test_report_15947_easybuilders_preasybuild-easyconfigs_20225602-UTC-12-56-33.md': [Object]
//     },
//     public: true,
//     created_at: '2022-08-02T12:56:33Z',
//     updated_at: '2022-08-02T12:56:33Z',
//     description: 'EasyBuild test report for easybuilders/easybuild-easyconfigs PR(s) #15947',
//     comments: 0,
//     user: null,
//     comments_url: 'https://api.github.com/gists/074a340bee16370e22510f9d908aef1a/comments',
//     owner: {
//       login: 'boegelbot',
//       id: 26523804,
//       node_id: 'MDQ6VXNlcjI2NTIzODA0',
//       avatar_url: 'https://avatars.githubusercontent.com/u/26523804?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/boegelbot',
//       html_url: 'https://github.com/boegelbot',
//       followers_url: 'https://api.github.com/users/boegelbot/followers',
//       following_url: 'https://api.github.com/users/boegelbot/following{/other_user}',
//       gists_url: 'https://api.github.com/users/boegelbot/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/boegelbot/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/boegelbot/subscriptions',
//       organizations_url: 'https://api.github.com/users/boegelbot/orgs',
//       repos_url: 'https://api.github.com/users/boegelbot/repos',
//       events_url: 'https://api.github.com/users/boegelbot/events{/privacy}',
//       received_events_url: 'https://api.github.com/users/boegelbot/received_events',
//       type: 'User',
//       site_admin: false
//     },
//     truncated: false
//   },
//   {
//     url: 'https://api.github.com/gists/a48b9cc95ab14fc6f74bddb8c719ccc3',
//     forks_url: 'https://api.github.com/gists/a48b9cc95ab14fc6f74bddb8c719ccc3/forks',
//     commits_url: 'https://api.github.com/gists/a48b9cc95ab14fc6f74bddb8c719ccc3/commits',
//     id: 'a48b9cc95ab14fc6f74bddb8c719ccc3',
//     node_id: 'G_kwDOBDAVX9oAIGE0OGI5Y2M5NWFiMTRmYzZmNzRiZGRiOGM3MTljY2Mz',
//     git_pull_url: 'https://gist.github.com/a48b9cc95ab14fc6f74bddb8c719ccc3.git',
//     git_push_url: 'https://gist.github.com/a48b9cc95ab14fc6f74bddb8c719ccc3.git',
//     html_url: 'https://gist.github.com/a48b9cc95ab14fc6f74bddb8c719ccc3',
//     files: {
//       'add_params_to_signature.py': [Object],
//       'async_api_call.py': [Object],
//       'validate_decorator.py': [Object]
//     },
//     public: true,
//     created_at: '2022-08-02T12:56:29Z',
//     updated_at: '2022-08-02T12:56:29Z',
//     description: 'python NDA',
//     comments: 0,
//     user: null,
//     comments_url: 'https://api.github.com/gists/a48b9cc95ab14fc6f74bddb8c719ccc3/comments',
//     owner: {
//       login: 'pKotlayrov',
//       id: 70260063,
//       node_id: 'MDQ6VXNlcjcwMjYwMDYz',
//       avatar_url: 'https://avatars.githubusercontent.com/u/70260063?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/pKotlayrov',
//       html_url: 'https://github.com/pKotlayrov',
//       followers_url: 'https://api.github.com/users/pKotlayrov/followers',
//       following_url: 'https://api.github.com/users/pKotlayrov/following{/other_user}',
//       gists_url: 'https://api.github.com/users/pKotlayrov/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/pKotlayrov/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/pKotlayrov/subscriptions',
//       organizations_url: 'https://api.github.com/users/pKotlayrov/orgs',
//       repos_url: 'https://api.github.com/users/pKotlayrov/repos',
//       events_url: 'https://api.github.com/users/pKotlayrov/events{/privacy}',
//       received_events_url: 'https://api.github.com/users/pKotlayrov/received_events',
//       type: 'User',
//       site_admin: false
//     },
//     truncated: false
//   },
//   {
//     url: 'https://api.github.com/gists/f973594ac584587c01ac888cd8da203e',
//     forks_url: 'https://api.github.com/gists/f973594ac584587c01ac888cd8da203e/forks',
//     commits_url: 'https://api.github.com/gists/f973594ac584587c01ac888cd8da203e/commits',
//     id: 'f973594ac584587c01ac888cd8da203e',
//     node_id: 'G_kwDOAZS4nNoAIGY5NzM1OTRhYzU4NDU4N2MwMWFjODg4Y2Q4ZGEyMDNl',
//     git_pull_url: 'https://gist.github.com/f973594ac584587c01ac888cd8da203e.git',
//     git_push_url: 'https://gist.github.com/f973594ac584587c01ac888cd8da203e.git',
//     html_url: 'https://gist.github.com/f973594ac584587c01ac888cd8da203e',
//     files: {
//       'easybuild_test_report_15948_easybuilders_preasybuild-easyconfigs_20225602-UTC-12-56-16.md': [Object]
//     },
//     public: true,
//     created_at: '2022-08-02T12:56:17Z',
//     updated_at: '2022-08-02T12:56:17Z',
//     description: 'EasyBuild test report for easybuilders/easybuild-easyconfigs PR(s) #15948',
//     comments: 0,
//     user: null,
//     comments_url: 'https://api.github.com/gists/f973594ac584587c01ac888cd8da203e/comments',
//     owner: {
//       login: 'boegelbot',
//       id: 26523804,
//       node_id: 'MDQ6VXNlcjI2NTIzODA0',
//       avatar_url: 'https://avatars.githubusercontent.com/u/26523804?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/boegelbot',
//       html_url: 'https://github.com/boegelbot',
//       followers_url: 'https://api.github.com/users/boegelbot/followers',
//       following_url: 'https://api.github.com/users/boegelbot/following{/other_user}',
//       gists_url: 'https://api.github.com/users/boegelbot/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/boegelbot/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/boegelbot/subscriptions',
//       organizations_url: 'https://api.github.com/users/boegelbot/orgs',
//       repos_url: 'https://api.github.com/users/boegelbot/repos',
//       events_url: 'https://api.github.com/users/boegelbot/events{/privacy}',
//       received_events_url: 'https://api.github.com/users/boegelbot/received_events',
//       type: 'User',
//       site_admin: false
//     },
//     truncated: false
//   }
// ]
// yashupadhyay@Yashs-MacBook-Pro Promises_Assignments % 