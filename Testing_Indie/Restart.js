var readline = require('readline-sync')

//File system, json file or text file or constant json data. This sound wierd ;-;
//Take stuff above and make objects, pour into cauldron and watch the world burn

class Category{ //Fix this later. Category class to create name, array of MCQs and answers. Think about it.
    constructor(name){
        this.name = "Wanna Cry"; //Quiz category name
        this.questions = []; //Array that stores questions
        this.questions.push(new MCQ("Is the sky blue?", "No it's red.", "Yes.", "Why is this a thing.", "0-0"));
        this.questions.push(new MCQ("What is the answer to the life, the universe and everything", "42", "Self-reflection", "Too complex a question to even comprehend", "My brain hurts."));
        this.questions.push(new MCQ("Braiiiiiiiiiiiiiiiiiiiiins", "Noooooooooooo", "Draiiiiiiiiiiiiins", "Oh no zombies!", "Craaaaaaaaaaaaaaaaaanes"));
        this.questions.push(new MCQ("Disrespect is...", "Ganondorf", "Purple Luigi", "Who is dat guy above", "All of the above"));
        this.questions.push(new MCQ("Cheezeburgers", "Yes", "Yes", "Yes", "No"));
        this.answers = [this.questions[1], this.questions[1], this.questions[2], this.questions[3], this.questions[1]]; //answers
    }
}

class Quiz{
    constructor(){
        this.quizzes = []; //Stores all diff categories
        this.quizzes.push(new Category("Wanna Cry"))
        this.quizname; //Chosen category
        this.ask_q; //Category questions
        this.ans_q; //Category answers
        this.responds = [];
    }

    testfunction(){ //debugging
        console.log(this.quizzes);
    }

    Ask(){ //Prompt for which category to attempt
        var input; //Stores the number
        while (input < 0 || input > this.quizzes.length || isNaN(input)){ //Checks for valid input
            console.log("Which quiz do you want to attempt?\n(0) Submit");
            for (var i = 0; i<this.quizzes.length; i++){
                console.log(`(${i+1}) ${this.quizzes[i].name}`); //Shows all the available quizzes
            }
            var input = parseInt(readline.question('> '));
    
            if (input < 0 || input > this.quizzes.length || isNaN(input)){
                console.log("Valid option please!");
            }
        }

        if (input != 0){
            this.quizname = this.quizzes[input -1].name; //Chosen quiz category
            this.ask_q = this.quizzes[input -1].questions; //Chosen questions
            this.ans_q = this.quizzes[input -1].answers; //Chosen answers
        }

        else{
            return 0;
        }
    }

    DoQuiz(){ //Gives and stores the quiz question and responses
        console.log(`This is the '${this.quizname}' quiz ;-;`)
        for (var i = 0; i<this.ask_q.length; i++){ //Goes through the questions
            console.log( `Q${i+1}: ${(this.ask_q[i]).question} ('P' to go to previous and 'N' to go next question)`);
            console.log(`1) ${(this.ask_q[i]).options[0]}\n2) ${(this.ask_q[i]).options[1]}\n3) ${(this.ask_q[i]).options[2]}\n4) ${(this.ask_q[i]).options[3]}`);
            var respond = readline.question('> ');
            if (!isNaN(respond)){ //If number
                if (parseInt(respond) <5 && parseInt(respond) >0 && respond%1 === 0){ //Check if valid option
                    this.responds[i] = ((this.ask_q[i]).options[respond]);
                }
                else{
                    console.log('Invalid option!');
                    i--;
                }
            }
            else if ((respond === 'P' || respond === 'p')&& i != 0){ //Go back 1 question
                i -= 2;
            }
            else if (respond != 'N' && respond != 'n'){ //Skip
                console.log("I don't think that's an option...");
                i--;
            }
        }
        return this.responds;
    }

    Submit(){ //Do you want to submit?
        var nvr_ans = [];
        for (var i = 0; i < this.ans_q.length; i++){
            if (this.responds[i] === undefined){
                nvr_ans.push(i+1);
            }
        }

        var submit_q;
        console.log('Done so fast?');
        if (nvr_ans.length > 0){
            console.log(`Looks like you left the following question(s) not done!\nQ${nvr_ans.join(', Q')}\n`)
        }

        while (submit_q > this.ask_q.length || submit_q < 0 || isNaN(submit_q)){
            submit_q = readline.questionInt(`(0) Submit\n(1-${this.ask_q.length}) Change answer\n> `);
            
            if (submit_q > this.ask_q.length || submit_q < 0 || isNaN(submit_q)){
                console.log("I don't think that's an option...");
            }
            
            if (submit_q === 0){
                return submit_q;
            }
        }
    }

    Results(){
        var score
        for (var i = 0; i<this.ask_q.length; i++){
            if (this.responds[i] === this.ans_q[i]){
                score ++;
            }
        }

        console.log(score);

        return total_score += score;
    }
}

var do_quiz = [];
var counter = 0;
var submit;
var total_score = 0;

while (submit != 0){
    do_quiz.push(new Quiz());
    submit = do_quiz[counter].Ask();
    if (submit != 0){
        do_quiz[counter].DoQuiz();
        do_quiz[counter].Submit();
        //do_quiz[counter].Results(responds);
    }
    counter++;
}
console.log (do_quiz[0].responds); //Planning to let you see previous quiz history
console.log("Hope you enjoyed the quiz. Bye!");