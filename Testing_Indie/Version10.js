var readline = require('readline-sync')

class MCQ{ //Create MCQ Questions
    constructor(Question, O1, O2, O3, O4){
        this.question = Question; //Asks the question
        this.options = [O1, O2, O3, O4]
    }
}

class Category{
    constructor(name, Q1, Q2, Q3, Q4, Q5, ans){
        this.name = name;
        this.questions = [Q1, Q2, Q3, Q4, Q5];
        this.answers = []
        for (var i = 0; i<5; i++){
            this.answers.push(this.questions[i].options[ans[i]-1])
        }
    }
}

class Quiz{
    constructor(){
        this.computer_commando = new Category("Computer Commando", 
                    (new MCQ("The UNIX command ___ will copy the file", "cls", "cp", "md", "sudo")),
                    (new MCQ("Which is the valid CMD command that will list the files in your current working directory?", "ls", "dir", "cd", "cls")),
                    (new MCQ("The command ____ performs the same function in BOTH UNIX and CMD", "pwd", "cat", "del", "cd")),
                    (new MCQ("Which of the following is NOT a terminal based editor?", "gedit", "Emacs", "Nano", "Vim")),
                    (new MCQ("Which is the most secure way to transfer files across linux systems", "FTP", "telnet", "SSH", "rcp")),
                    [1, 2, 4, 1, 3]
                    );

        this.literature = new Category("Literary Language",
                    (new MCQ(`"A pound of man's flesh taken from a man \nIs not so estimable, profitable neither, \nAs flesh of muttons, beefs, or goats"\n Which play is this from?`, "Merchant of Venice", "Hamlet", "Romeo and Juliet", "Macbeth")),
                    (new MCQ("Who wrote Pride and Prejudice?", "Jane Austen", "Shakespeare", "Enid Blyton", "Charlotte Bronte")),
                    (new MCQ('What is the "temperature at which book-paper catches fire, and burns"?', "232 celsius", "427 farenheit", "farehneit 451", "celsius 167")), 
                    (new MCQ(`"To be or not to be, that is the question.\nWhether tis' nobler in the mind to suffer\n___________________________`, "That flesh is heir to, 'tis a consummation", "For who would bear the whips and scorns of time,", "The heart-ache and the thousand natural shocks", "The slings and arrows of outrageous fortune")),
                    (new MCQ("How old was Anne Frank when she wrote her last entry in her diary?", "17", "14", "23", "15")),
                    [1, 1, 3, 4, 2]);
        this.quizzes = [this.computer_commando, this.literature];
        //All temp to store selected quiz
        this.qname;
        this.quest;
        this.ans;
        this.responds = new Array(5);
    }

    testfunc(){
        console.log(`${this.qname}`);
    }

    Ask(){
        var input; //Stores the number
        console.log("Which quiz do you want to attempt?\n(0) Exit");
        for (var i = 0; i<this.quizzes.length; i++){
            console.log(`(${i+1}) ${this.quizzes[i].name}`); //Shows all the available quizzes
        }

        input = parseInt(readline.question('> '));

        while (input < 0 || input > this.quizzes.length || isNaN(input)){
            console.log("Valid option please!");
            input = parseInt(readline.question('> '));
        }

        if (input != 0){
            var quiz = this.quizzes[input-1];
            this.qname = quiz.name;
            this.ask_q = quiz.questions;
            this.ans = quiz.answers;
        }

        else{
            return 0;
        }
    }
    
    DoQuiz(){
        var i = 0
        this.responds = [];
        console.log(`This is the "${this.qname}" quiz!`);
        while (i<5){
            console.log( `Q${i+1}: ${this.ask_q[i].question} ('P' to go to previous and 'N' to go next question)`);
            console.log(`1) ${this.ask_q[i].options[0]}\n2) ${this.ask_q[i].options[1]}\n3) ${this.ask_q[i].options[2]}\n4) ${this.ask_q[i].options[3]}`);
            var respond = readline.question('> ');

            if (!isNaN(respond)){ //If number
                if (parseInt(respond) < 5 && parseInt(respond) > 0 && respond%1 === 0){ //Check if valid option
                    this.responds[i] = this.ask_q[i].options[respond-1];
                    i++;
                }
                else{
                    console.log('Invalid option!');
                }
            }
            else if ((respond === 'P' || respond === 'p')&& i != 0){ //Go back 1 question
                i--;
            }
            else if (respond === 'N' || respond === 'n'){
                i++;
            }
            else{
                console.log("I don't think that's an option...");
            }
        }
    }

    Submit(){ //Do you want to submit?
        var submit_q;
        console.log('Done so fast?');

        while (submit_q != 0){
            var nvr_ans = [];
            for (var i = 0; i < this.ans.length; i++){ //Checks for empty questions
                if (this.responds[i] === undefined){
                    nvr_ans.push(i+1);
                }
            }
            if (nvr_ans.length > 0){
                console.log(`Looks like you left the following question(s) not done!\nQ${nvr_ans.join(', Q')}`)
            }
            submit_q = readline.questionInt(`(0) Submit\n(1-${this.ask_q.length}) Change answer\n> `);
            if (submit_q > 5 || submit_q < 0 || isNaN(submit_q)){
                console.log("I don't think that's an option...");
                continue;
            }
            if (submit_q > 0){
                var check = false
                while (check === false){
                    console.log(`Q${submit_q}: ${this.ask_q[submit_q-1].question}`);
                    console.log(`1) ${this.ask_q[submit_q-1].options[0]}\n2) ${this.ask_q[submit_q-1].options[1]}\n3) ${this.ask_q[submit_q-1].options[2]}\n4) ${this.ask_q[submit_q-1].options[3]}`);
                    var respond = readline.question('> ');
                    if (!isNaN(respond)){ //If number
                        if (parseInt(respond) < 5 && parseInt(respond) > 0 && respond%1 === 0){ //Check if valid option
                            this.responds[submit_q-1] = this.ask_q[submit_q-1].options[respond-1];
                            check = true;
                        }
                        else{
                            console.log('Invalid option!');
                        }
                    }
                }
            }

            else if (submit_q === 0){
                return this.responds;
            }
        }
    }

    Results(){
        var score = 0
        for (var i = 0; i<5; i++){
            console.log(`\nQ${i+1}: ${this.ask_q[i].question}`);
            if (this.responds[i] === this.ans[i]){
                console.log(`[O] You answered: ${this.responds[i]}`);
                score += 5
            }
            else{
                console.log(`[X] You answered: ${this.responds[i]}`);
                console.log(`Correct answer: ${this.ans[i]}`)
            }
        }
        console.log(`You scored ${score}/25! for the "${this.qname}" quiz!\n`)

        return score;
    }
}

var the_great_quiz = new Quiz();

while (the_great_quiz.Ask() != 0){
    the_great_quiz.DoQuiz();
    the_great_quiz.Submit();
    the_great_quiz.Results();
}