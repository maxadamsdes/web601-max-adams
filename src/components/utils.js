

async function fetchLogin(pEmail, pPassword){
 
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: pEmail, password : pPassword })
    };
    alert("sending " + requestOptions.body);
    const res = await fetch('https://webdev.talos.net.nz/~max-adams/api/login', requestOptions);
    return res;
}

export async function login({ email, password }) {
  return new Promise((resolve, reject) => {
    fetchLogin(email,password)
    .then( res => res.json())
    .then(data => {
      alert("DATA IS"+data); // JSON data parsed by `data.json()` call
      let resultObj = (JSON.parse(data))[0];
      if(resultObj.Result != 1 )
          reject();
      else 
          resolve();
    })
    ; 
  });
}

async function fetchRegister(pEmail){
 
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: pEmail })
  };
  alert("sending " + requestOptions.body);
  const res = await fetch('https://webdev.talos.net.nz/~max-adams/api/register', requestOptions);
  return res;
}

export async function register({ pEmail }) {
  return new Promise((resolve, reject) => {
    fetchRegister(pEmail)
    .then( res => res.json())
    .then(data => {
      alert("DATA IS"+data); // JSON data parsed by `data.json()` call
      let resultObj = (JSON.parse(data))[0];
      if(resultObj.Result != 1 )
          reject();
      else 
          resolve();
    })
    ; 
  });
}

async function fetchRegisterCommit(pFirstName, pLastName, pEmail, pPassword, pType, pGender, pCollege, pYear){
 
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName: pFirstName, lastName: pLastName, email: pEmail, password: pPassword, type: pType, gender: pGender, college: pCollege, year: pYear })
  };
  alert("sending " + requestOptions.body);
  const res = await fetch('https://webdev.talos.net.nz/~max-adams/api/registerUser', requestOptions);
  return res;
}

export async function registerCommit({ pFirstName, pLastName, pEmail, pPassword, pType, pGender, pCollege, pYear }) {
  return new Promise((resolve, reject) => {
    fetchRegisterCommit(pFirstName, pLastName, pEmail, pPassword, pType, pGender, pCollege, pYear)
    .then( res => res.json())
    .then(data => {
      alert("DATA IS"+data); // JSON data parsed by `data.json()` call
      let resultObj = (JSON.parse(data))[0];
      if(resultObj.Result != 1 )
          reject();
      else 
          resolve();
    })
    ; 
  });
}


async function submitComment(pUserName, pComment){
 
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: pUserName, comment: pComment})
      
     
  };
  alert("sending " + requestOptions.body);
  const res = await fetch('https://webdev.talos.net.nz/~max-adams/api/comment', requestOptions);
  return res;
}

export async function storeComment({ username, pcomment }) {
return new Promise((resolve, reject) => {
  submitComment(username,pcomment)
  .then( res => res.json())
  .then(data => {
    alert("DATA IS"+data); // JSON data parsed by `data.json()` call
    let resultObj = (JSON.parse(data))[0];
    if(resultObj.Result != 1 )
        reject();
    else 
        resolve();
  })
  ; 
});
}

async function fetchadmin(pEmail){
 
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: pEmail })
  };
  alert("sending " + requestOptions.body);
  const res = await fetch('https://webdev.talos.net.nz/~max-adams/api/admin', requestOptions);
  return res;
}

export async function adminCheck({ email }) {
return new Promise((resolve, reject) => {
  fetchadmin(email)
  .then( res => res.json())
  .then(data => {
    alert("DATA IS"+data); // JSON data parsed by `data.json()` call
    let resultObj = (JSON.parse(data))[0];
    if(resultObj.Result != 1 )
        reject();
    else 
        resolve();
  })
  ; 
});
}