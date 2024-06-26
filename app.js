const gete = document.getElementById('input');

const btn=document.getElementById('btn');
const username = input.value;
const bn = document.getElementById('details')
// const url="https://github.com/octokit/core.js#readme";

const job=async ()=>{
   
    const get = await fetch(`https://api.github.com/users/${gete.value}`)
    .then(res=>res.json())
    .then(data=>{

if(data.message){
    console.log("invalid");
    bn.innerHTML=`<h3>Invalid</h3>`
}

else{

    console.log(data);
  bn.innerHTML=  `
    <div class="card bg-dark text-white container-fluid mt-3  mb-3" style="max-width: 18rem;">
     <img src="${data.avatar_url}" alt="">
  <div class="card-header">${data.login}</div>
  <div class="card-body">
    <h5 class="card-title">${data.id} <strong>id</strong></h5>
    <h5 class="card-title">${data.followers} <strong>followers</strong></h5>
    <h5 class="card-title">${data.following} <strong>following</strong></h5>
    <h5 class="card-text">${data.public_repos} <strong>Repos</strong></h5>
    <p>Bio: ${data.bio}</p>
<a href="${data.html_url}" class="btn btn-success" target=”_blank”>Profile Link</a>
  </div>
  `

    
   
}
    })

    .catch(r=>{
      console.log("Failed to fetch data ");
      bn.innerHTML=`<div><h1 class="text-white mt-3 text-center" >Failed to Fetch </h1></div>`
    })
    
}







