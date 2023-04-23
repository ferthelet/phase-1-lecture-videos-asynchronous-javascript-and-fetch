console.log('one');
setTimeout(() => console.log('two'), 3000);
console.log('three');

console.log(fetch('http://localhost:3000/animals'));
fetch('http://localhost:3000/animals')
    .then(response => console.log(response));

async function logJSONData() {
    const response = await fetch('https://justcors.com/tl_dac7484');
    //const response = await fetch("http://cors-anywhere.com/http://example.com/movies.json");
    const jsonData = await response.json();
    console.log(jsonData);
}

logJSONData();