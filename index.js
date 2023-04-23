console.log('one');
setTimeout(() => console.log('two'), 3000);
console.log('three');

console.log(fetch('http://localhost:3000/animals'));
fetch('http://localhost:3000/animals')
.then(response => console.log(response));