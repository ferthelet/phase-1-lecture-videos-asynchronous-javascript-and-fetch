
console.log('one');
setTimeout(() => console.log('two'), 3000);
console.log('three');

// console.log(fetch('http://localhost:3000/animals'));
fetch('http://localhost:3000/animals')
    .then(response => console.log(response));

async function logJSONData() {
    // we have to use a proxy to get the Access-Control-Allow-Origin header added
    const response = await fetch('https://justcors.com/tl_dac7484');
    //const response = await fetch("http://cors-anywhere.com/http://example.com/movies.json");
    const jsonData = await response.json();
    console.log(jsonData);
}

// let response = fetch('http://localhost:3000/animals');
// // await not working, only a the top level?
// if (response.ok) {
//     let json =  response.json();
// } else {
//     alert("HTTP error: " + response.status);
// }

// response can be
// response.txt()
// response.json()
// response.formData()
// response.blob() as a binary data type as a FormData() object
// responseArrayBuffer() a two level representation of binary data
// also response.arrayBody() is a readbale stream** to read the body chunk by chunk
