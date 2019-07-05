var readline = require('readline-sync');

var responds = [];
var total_score = 0;

class Quiz{
    constructor(QuizType, Questions, Options, Answers){
        this.QuizType = QuizType;
        this.Questions = Questions;
        this.Options = Options;
        this.Answers = Answers;
    }

    DoQuiz(){
        var j = 0;
        console.log(`This is the '${this.QuizType}' quiz ;-;`)
        for (var i = 0; i<this.Questions.length; i++){
            console.log( `Q${i+1}: ${this.Questions[i]} ('P' to go to previous and 'N' to go next question)`);
            console.log(`${this.Options[j]}\n${this.Options[j+1]}\n${this.Options[j+2]}\n${this.Options[j+3]}`)
            var respond = readline.question('> ');
            if (!isNaN(respond)){
                if (parseInt(respond) <4 && parseInt(respond) >0){
                    responds.push(this.Options[parseInt(respond)+j-1])
                    i++;
                    j += 4;
                }
                else{
                    console.log('Invalid option!')
                }
            }
            if ((respond === 'P' || respond === 'p')&& i != 0){
                i--;
                j -= 4;
            }
            if ((respond === 'N' || respond === 'n')){
                j += 4;
            }
            if (respond != 'N' && respond != 'n'){
                i--;
            }
        }

        console.log('')

        return responds;
    }
    results(responds){
        var score = 0;
        for (var i = 0; i<this.Answers.length; i++){
            if (responds[i] === this.Answers[i]){
                score++;
            }
        }
        console.log(`You got ${score}`);
        total_score += score;
        return total_score;
    }
}

var WCQuestions = ["Is the sky blue?", "What is the answer to the life, the universe and everything?", "Braiiiiiiiiiiiiiiiiiiiiins"];
var WCOptions = ["1) No it's red.", "2) Yes.", "3) Why is this a thing.", "4) 0-0", "1) Self-discovery", "2) 42", "3) Too complex a question to even comprehend", "4) My brain hurts.","1) Noooooooooooo", "2) Draiiiiiiiiiiiiins", "3) Oh no zombies!", "4) Craaaaaaaaaaaaaaaaaanes"];
var WCAnswers = [WCOptions[1], WCOptions[5], WCOptions[10]];

Quizzes = [(new Quiz('Wanna Cry', WCQuestions, WCOptions, WCAnswers))]
Quizzes[0].DoQuiz();
Quizzes[0].results(responds);