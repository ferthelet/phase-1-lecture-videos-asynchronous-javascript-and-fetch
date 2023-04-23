// form https://javascript.info/fetch

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let myUrl = "http:localhost:3000/animals"

// without await works
// fetch(url)
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));

async function myAwait(url) {
    let response = await fetch(url); // no 2nd parameter? just a GET
    if(response.ok) {
        let commits = await response.json(); // read response body and parse as JSON
        console.log(commits[0].author.login);
    } else {
        alert("HTTP Error: " + response.status);
    }
}

myAwait(url);

async function myAwaitGet(url) {
    let response = await fetch(url); // no 2nd parameter? just a GET
    if(response.ok) {
        console.log(response);
    } else {
        alert("HTTP Error: " + response.status);
    }
}

myAwaitGet(myUrl);

async function myAwaitPost(url) {
    let animal =    {
        "name": "Striped Zebra",
        "description": "Zebra can kick with the force of a mule",
        "donations": 0
    };
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8' 
        },
        body: JSON.stringify(animal)
    });
    let result = await response.json();
    console.log(result.message);
}

myAwaitPost(myUrl);
myAwaitGet(myUrl);
