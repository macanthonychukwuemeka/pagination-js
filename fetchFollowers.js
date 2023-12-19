const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {
  const response = await fetch(url)
  const data = await response.json()
   return data
}






export default fetchFollowers

 const newarray = [
  {
  "login": "tarasis",
  "id": 3006,
  "node_id": "MDQ6VXNlcjMwMDY=",
  "avatar_url": "https://avatars.githubusercontent.com/u/3006?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tarasis",
  "html_url": "https://github.com/tarasis",
  "followers_url": "https://api.github.com/users/tarasis/followers",
  "following_url": "https://api.github.com/users/tarasis/following{/other_user}",
  "gists_url": "https://api.github.com/users/tarasis/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tarasis/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tarasis/subscriptions",
  "organizations_url": "https://api.github.com/users/tarasis/orgs",
  "repos_url": "https://api.github.com/users/tarasis/repos",
  "events_url": "https://api.github.com/users/tarasis/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tarasis/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "benackles",
  "id": 12502,
  "node_id": "MDQ6VXNlcjEyNTAy",
  "avatar_url": "https://avatars.githubusercontent.com/u/12502?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/benackles",
  "html_url": "https://github.com/benackles",
  "followers_url": "https://api.github.com/users/benackles/followers",
  "following_url": "https://api.github.com/users/benackles/following{/other_user}",
  "gists_url": "https://api.github.com/users/benackles/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/benackles/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/benackles/subscriptions",
  "organizations_url": "https://api.github.com/users/benackles/orgs",
  "repos_url": "https://api.github.com/users/benackles/repos",
  "events_url": "https://api.github.com/users/benackles/events{/privacy}",
  "received_events_url": "https://api.github.com/users/benackles/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "jagdpenta",
  "id": 25173,
  "node_id": "MDQ6VXNlcjI1MTcz",
  "avatar_url": "https://avatars.githubusercontent.com/u/25173?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jagdpenta",
  "html_url": "https://github.com/jagdpenta",
  "followers_url": "https://api.github.com/users/jagdpenta/followers",
  "following_url": "https://api.github.com/users/jagdpenta/following{/other_user}",
  "gists_url": "https://api.github.com/users/jagdpenta/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jagdpenta/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jagdpenta/subscriptions",
  "organizations_url": "https://api.github.com/users/jagdpenta/orgs",
  "repos_url": "https://api.github.com/users/jagdpenta/repos",
  "events_url": "https://api.github.com/users/jagdpenta/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jagdpenta/received_events",
  "type": "User",
  "site_admin": false
},
]

 const newItem = newarray[0].id;


   const arrrays =  newarray.map((item) => {
    const siteAdmin = item.repos_url;
    return siteAdmin
    
  })
  console.log(arrrays);
 console.log(newItem );
 
 