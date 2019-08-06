var fs = require('fs');
/*
fs.writeFile(`Input.txt`, 'Hello world!', function (err) {});

fs.readFile('Input.txt', 'utf-8', (err, data) => { 
  if (err) throw err; 

  console.log(data); 
}) 
*/

var hello = fs.readFileSync('Computer.json')
console.log(JSON.parse(hello))