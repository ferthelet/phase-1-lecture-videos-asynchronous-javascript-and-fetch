let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

// without await works
// fetch(url)
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));

async function myAwait(url) {
    let response = await fetch(url);
    if(response.ok) {
        let commits = await response.json(); // read response body and parse as JSON
        console.log(commits[0].author.login);
    } else {
        alert("HTTP Error: " + response.status);
    }
}


myAwait(url);