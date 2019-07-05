//Trying to import a text file into an array =|
var readline = require('readline-sync');
var fs = require('fs');

var response = [];

var WannaCryQ = fs.readFile('./WC_Q.txt').text.split('\n\n');

console.log (WannaCryQ);