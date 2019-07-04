var readline = require('readline-sync');
var fs = require('fs')

var response = []

var fs = require('fs')
var WannaCryQ = fs.readFile('WC_Q.txt').text.split('\n\n');

console.log (WannaCryQ);

/*
class quizAnswers{
    constructor(IChooseYou){
        chosen = IChooseYou;
    }
    WannaCryA(){
        
    }
}

function pickMe(){
    pickme = readline.questionInt('Which Quiz do you want?\n(1) I Wanna Cry\n> ')
    return pickme
}

while (pickMe != 1){
    pickMe()
}

class Quiz{
    constructor(resp){
        response.push(resp);
    }
    IWannaCry(){
        
    }
}
*/