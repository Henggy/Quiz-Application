var readline = require('readline-sync');
//Hi cher there's a bonus feature for debugging purposes that unlocks everything along with unlimited passes. Just need to make sure the time is appropriate for coffee
var coffeetime = false;
var name = AskName();
if (name === 'Ex-Google Techlead'){ //coffeetime = true
    coffeetime = true;
    free_pass = 999;
    console.log("\nIt is coffeetime. You now have 999 free passes and bonus features unlocked");
}

class MCQ{ //Create MCQ Questions
    constructor(Question, O1, O2, O3, O4){
        this.question = Question; //Asks the question
        this.options = [O1, O2, O3, O4]; //Options
    }
}

class Category{ //Creates Category
    constructor(name, Q1, Q2, Q3, Q4, Q5, ans){
        this.name = name; //Quiz name
        this.questions = [Q1, Q2, Q3, Q4, Q5]; //Stores the questions from MCQ class
        this.answers = [] //Stores the answers
        for (var i = 0; i<5; i++){ //Stores the answers as a string
            this.answers[i] = (this.questions[i].options[ans[i]-1]);
        }
    }
}

class SortingHat{ //PERSONALITY QUIZ THAT TOOK TOO MUCH TIME TO MAKE
    constructor(name, Q1, Q2, Q3, Q4, Q5){
        this.name = name; //Quiz name
        this.questions = [Q1, Q2, Q3, Q4, Q5]; //Stores the questions from MCQ class
        var gryffindor = [2, 1, 4, 3, 1]; //Answers for Gryffindor
        var hufflepuff = [4, 3, 2, 4, 3]; //Refer above
        var ravenclaw = [1, 2, 3, 1, 4]; //Already read above
        var slytherin = [3, 4, 1, 2, 2]; //can this stop
        this.houses = [gryffindor, hufflepuff, ravenclaw, slytherin]; //Stores answers for all houses muahaha
        for (var i = 0; i<4; i++){ //Storing the answers as a string
            var temphouse = this.houses[i];
            var tempanswers = [];
            for (var j = 0; j<5; j++){
                tempanswers.push(this.questions[j].options[temphouse[j]-1])
            }
            this.houses[i] = tempanswers;
        }
    }
}

class Quiz{ //Everything the Quiz does is in here
    constructor(){
        this.computer_commando = new Category("Computer Commando", //This is the category name
                    (new MCQ("The UNIX command ___ will copy the file", "cls", "cp", "md", "sudo")), //This is a question.
                    (new MCQ("Which is the valid command prompt command that will list the files in your current working directory?", "ls", "dir", "cd", "cls")),
                    (new MCQ("The command ____ performs the same function in BOTH Linux and Windows", "pwd", "cat", "del", "cd")),
                    (new MCQ("Which of the following text editor when used in the terminal will open a new window in Linux?", "gedit", "Emacs", "Nano", "Vim")),
                    (new MCQ("Which is the most secure way to transfer files across linux systems", "FTP", "telnet", "SSH", "rcp")),
                    [2, 2, 4, 1, 3]); //Reference numbers when storing the answer strings

        this.literature = new Category("Languish in Literature",
                    (new MCQ(`"A pound of man's flesh taken from a man \nIs not so estimable, profitable neither, \nAs flesh of muttons, beefs, or goats"\n Which play is this from?`, "Merchant of Venice", "Hamlet", "Romeo and Juliet", "Macbeth")),
                    (new MCQ("Who wrote Pride and Prejudice?", "Jane Austen", "Shakespeare", "Enid Blyton", "Charlotte Bronte")),
                    (new MCQ('What is the "temperature at which book-paper catches fire, and burns"?', "232 celsius", "427 farenheit", "farehneit 451", "celsius 167")), 
                    (new MCQ(`"To be or not to be, that is the question.\nWhether tis' nobler in the mind to suffer\n___________________________ (Fill in the blank)`, "That flesh is heir to, 'tis a consummation", "For who would bear the whips and scorns of time,", "The heart-ache and the thousand natural shocks", "The slings and arrows of outrageous fortune")),
                    (new MCQ("How old was Anne Frank when she wrote her last entry in her diary?", "17", "14", "23", "15")),
                    [1, 1, 3, 4, 4]);

        this.language = new Category("Polyglot Around The World",
                    (new MCQ(`Which language is "très bien" in?`, "Spanish", "Irish", "French", "Portuguese")),
                    (new MCQ(`"Vergangenheitsbewältigung", a German term coined after 1945. What is the meaning behind it?`, "Atrocities have been committed", "Struggles to overcome the past", "Do no wrong", "None of the above")),
                    (new MCQ("How many major Chinese dialects are spoken in China?", "2", "4", "5", "7")),
                    (new MCQ(`The longest English without an e to date is "floccinaucinihilipilification". What does this exactly mean?`, 'A habit of estimating something as worthless', 'Indulging only very moderately in something, especially food and drink.', 'A lung disease', 'The fear of long words')),
                    (new MCQ(`Last question! What does "polyglot" mean?`, "Glutton for specific food", "Many mistakes", "Greek tongue", "The ability to speak many languages")),
                    [3, 2, 3, 1, 4]);

        this.yer_a_wizard = new SortingHat(`Yer a Wizard ${name}`,
                    (new MCQ(`Ready to go to wizarding school ${name}? Well before we do that, you need to pick a wand core!`, `Unicorn Hair`, `Pheonix Feathers`, `Dragon Heartstring`, `Kelpie Hair`)),
                    (new MCQ(`On your way home, you bumped into a nasty acquaintance who insulted you by calling you __________.`, `A coward`, `Ignorant`, `Selfish`, 'Ordinary')),
                    (new MCQ(`Your great-aunt has invited you over to her house to congratulate you on your admission and you're finally allowed to go into her secret garden. What would you look at first?`, `A silver tree with golden apples`, `Talking Toadstools`, `Statue with a twinkling eye`, `Luminous Pool with something in its depths`)), 
                    (new MCQ(`Right before you leave your home for Hogwarts, you parents show you four boxes. You get to pick one`, `A plain jet black box with a silver rune that you know to be the mark of Merlin.`, `A golden box with carved feet that warns secret knowledge and unbearable temptation lurk within.`, `A plain pewter box that says “I open only for the worthy."`, `A tortoiseshell box that sounds like something living is squeaking inside.`)),
                    (new MCQ(`There's a welcome party for the new students and you see four goblets placed before you. Which do you drink?`, `The golden potion that gives off bright sunspots that dance around the room.`, `A silvery, glittery potion that sparkles as if containing ground diamonds.`, `A thick potion that smells of plums and chocolate.`, `A black, inky potion that gives off fumes that make you see strange visions.`)));

        this.quizzes = [this.computer_commando, this.literature, this.language]; //Stores available quizzes

        if (total_score > 75 || coffeetime){ //If total score is more that 75, add new category to list of available quizzes.
            this.quizzes.push(this.yer_a_wizard)
        }

        //All temp to store selected quiz
        this.qname; //Stores selected quizname
        this.quest; //Stores selected quiz questions
        this.ans; //selected quiz and this.responds = new Array(5); //User response
    }

    Ask(){ //Prompts for the options to pick a quiz category, check past results or exit
        var length = this.quizzes.length; //because this.quizzes.length is a pain to type and I need to change the length oso for the extra options
        console.log("\nWhich quiz do you want to attempt?\n(0) Exit");
        for (var i = 0; i<length; i++){
            console.log(`(${i+1}) ${this.quizzes[i].name}`); //Shows all the available quizzes
        }
        console.log(`(${i+1}) README.md`)
        if (history.length != 0){ //Will only show if quiz has been attempted
            length += 2; //Increases the highest num user can input without failing validation.
            console.log(`(${i+2}) Check current score`);
            console.log(`(${i+3}) View history`);
        }

        choice = parseInt(readline.question('> ')); //Stores input

        while (choice < 0 || choice > length+1 || isNaN(choice)){ //If not a number that is within listed options.
            console.log("Valid option please!");
            choice = parseInt(readline.question('> '));
        }

        if (choice != 0 && choice <= this.quizzes.length){ //Stores all the details for the quiz that is going to be attempted.
            var quiz = this.quizzes[choice-1]; //The selected quiz variable
            this.qname = quiz.name; //Quiz name
            this.ask_q = quiz.questions; //Quiz questions
            if (choice-1 != 3){
                wizard = false;
                this.ans = quiz.answers; //Answers
                this.quizscore = all_scores[choice-1]; //Stores the last attempt
            }
            else{
                wizard = true; //Attempting the odd personality quiz that works differently
                this.ans = quiz.houses
            }
        }

        else{ //Not attempting the quiz
            return choice;
        }
    }

    checkPass(i, respond, canchange){ //Checks if free pass was used
        console.log (`The answer is '${this.ans[i]}'`);
        if (canchange){
            respond = readline.question(`> `);
            if ((respond === 'P' || respond === 'p')&& i != 0){ //Go back 1 question
                i--;
            }
            else if (respond === 'N' || respond === 'n'){ //Next plz
                i++;
            }
            else{ //You shall not pass
                console.log("Invalid input!");
            }
            return i;
        }
    }

    checkAns(i, respond, canchange){ //Validates answer as well as performs navigation
        if (!isNaN(respond)){ //If number
            if (parseInt(respond) < 5 && parseInt(respond) > 0 && respond%1 === 0){ //Check if valid option
                this.responds[i] = this.ask_q[i].options[respond-1]; //Stores the answer as a string into the reponds array
                i++; //next question
            }
            else{
                console.log('Invalid option!');
            }
        }
        else if (respond === 'S' || respond === 's' && !wizard){
            if (free_pass != 0){ //If there is free pass
                console.log(`The answer is '${this.ans[i]}'`);
                this.responds[i] = this.ans[i];
                check_pass[i] = true;
                free_pass--;
                i++;
            }
            else{
                console.log("You have no free passes!");
            }
        }
        else if ((respond === 'P' || respond === 'p') && i != 0 && canchange){ //Go back 1 question
            i--;
        }
        else if (respond === 'N' || respond === 'n' && canchange){ //Go next question
            if (wizard){
                if (this.responds[i+1] === undefined){ //Won't let you go next question
                    console.log("Time turners only go backwards! Not forwards!");
                }
            }
            else{
                i++;
            }
        }
        else if (respond === 'J' || respond === 'j' && canchange){ //Change question number
            var validresponse = false; //keeps the loop going I guess
            while (!validresponse){ //While not valid
                var change_i = readline.question("\nWhich question numbers would you like to go to? (X to cancel)\n> "); //Input question number here or cancel
                if (change_i === 'X' || change_i === 'x'){ //Nothing happened so return to question
                    validresponse = true;
                }
                else if (wizard){
                    if (parseInt(change_i) >= 1 && parseInt(change_i) > i){ //Will only let you go to a previous question
                        console.log("Time turners only go backwards! Not forwards!")
                    }
                    else if (parseInt(change_i) >= 1 && parseInt(change_i) <= 5){ //Change to input question num
                        i = parseInt(change_i-1);
                        validresponse = true;
                    }
                    else{ //Moar validation
                        console.log("I don't think that's an option...");
                    }
                }
                else if (parseInt(change_i) >= 1 && parseInt(change_i) <= 5){ //Change to input question num
                    i = parseInt(change_i-1);
                    validresponse = true;
                }
                else{ //Moar validation
                    console.log("I don't think that's an option...");
                }
            }
        }
        else{ //Do I really need to comment this
            console.log("I don't think that's an option...");
        }
        return i;
    }

    printQuestion(i){ //Prints the question
        console.log( `\nQ${i+1}: ${this.ask_q[i].question}`);
        console.log(`1) ${this.ask_q[i].options[0]}\n2) ${this.ask_q[i].options[1]}\n3) ${this.ask_q[i].options[2]}\n4) ${this.ask_q[i].options[3]}`);
    }
    
    DoQuiz(){ //Conducts the quiz
        var i = 0;
        this.responds = [];
        var respond;
        var canchange = true;
        check_pass = new Array(5);
        console.log(`This is the "${this.qname}" quiz!`);
        while (i<5){
            this.printQuestion(i);

            if(check_pass[i]){ //If skip has been used, cannot change correct answer
                i = this.checkPass(i, respond);
            }
            else{
                respond = readline.question(`\n'S' for a free skip (${free_pass} skips left)\nNavigate questions with (P/N) or J to jump question.\n> `);
                i = this.checkAns(i, respond, canchange);
            }
        }
    }

    BecomeWizard(){ //Does Sorting hat things
        var i = 0;
        var canchange = true;
        this.responds = [];
        var respond;
        //Random sorting hat song
        console.log("\nYou can keep your bowlers black,\nYour top hats sleek and tall,\nFor I’m the Hogwarts Sorting Hat\nAnd I can cap them all.\nThere’s nothing hidden in your head\nThe Sorting Hat can’t see,\nSo try me on and I will tell you\nWhere you ought to be.")
        
        while (i<5){
            this.printQuestion(i);
            respond = readline.question(`\nNavigate journey with (P) or J to jump to a point of adventure.\n> `);
            i = this.checkAns(i, respond, canchange);
        }
    }

    TheSortingHatSays(){ //The sorting hat has spoken
        var score = 0
        var housetally = new Array(4).fill(0);
        for (var i = 0; i<5; i++){
            for (var j = 0; j<4; j++){
                if (this.ans[j][i] == this.responds[i]){
                    housetally[j] += 5;
                }
            }
        }
        for (i = 0; i<4; i++){
            if (housetally[i] > score){
                score = housetally[i];
                house = i
            }
            else if (housetally[i] == score){
                if (Math.random() >= 0.5){
                    score = housetally[i];
                    house = i
                }
            }
        }

        var description;
        switch(house) {
            case 0:
                house = `${parseInt(score/25*100)}% Gryffindor`
                description = `The house of the brave, loyal, courageous, adventurous, daring, and chivalrous. Those who stand up for others are typically Gryffindors. Brave-hearted is the most well-known Gryffindor characteristic, and Gryffindors are also known for having a lot of nerve.\n\nGryffindors are people who hold a multitude of qualities alongside the ones listed, making them a very well-rounded house. People who are Gryffindors are often people who could fit nicely into another house but choose to tell the sorting hat they want Gryffindor (there's that bravery). "Do what is right" is the motto Gryffindors go by.\n\nBeing a Gryffindor means that you're probably an adventurous and courageous friend, and you are usually known for doing what is right.`
                break;
            case 1:
                house = `${parseInt(score/25*100)}% Hufflepuff`
                description = `This house values hard work, dedication, fair play, patience, and loyalty. Hufflepuff's are known for being just and true. "Do what is nice" is their motto.\n\nHufflepuff is known as the “nice house" and believes strongly in sparing people's feelings and being kind. This is not to say that Hufflepuffs aren't smart or courageous. Hufflepuffs just enjoy making others happy and tend to be more patient toward people.\n\nIf you ever find that you are too nice for your own good and cannot bear to hurt someone's feelings, congratulations, you are a Hufflepuff.`
                break;
            case 2:
                house = `${parseInt(score/25*100)}% Ravenclaw`
                description = `The house is known for their wisdom, intelligence, creativity, cleverness, and knowledge. Those who value brains over brawn can be found here. Ravenclaws often tend to be quite quirky as well. "Do what is wise" is the motto they strive to follow.\n\nThough Ravenclaws can be know-it-alls sometimes, they most likely do know what the wisest decision is.\n\nIf you are known for being the quirky friend, the smartest in the group or just great at making wise decisions, you're definitely a Ravenclaw.`
                break;
            default:
                house = `${parseInt(score/25*100)}% Slytherin`
                description = `This is the house of the cunning, prideful, resourceful, ambitious, intelligent, and determined. Slytherin's love to be in charge and crave leadership. "Do what is necessary" is the motto of this house.\n\nSlytherin is a fairly well-rounded house, similar to the other houses. They are loyal to those that are loyal to them just as Gryffindors are and are intelligent as Ravenclaws.\n\nSlytherin house as a whole is not evil, despite how many dark wizards come out of this house. That is merely based on the choices of those wizards (so if your friend is a Slytherin, don't judge, it doesn't mean they are mean people). Slytherins do, however, have a tendency to be arrogant or prideful. This is most likely due to the fact that everyone in Slytherin is exceedingly proud to be there.`
          }
          console.log(`Congratulations! You are ${house}!\n\n${description}`);
    }

    Submit(){ //Do you want to submit?
        var submit_q;
        var canchange = false;
        console.log("Done already?");

        while (submit_q != 0){
            var nvr_ans = [];
            for (var i = 0; i < this.ans.length; i++){ //Checks for empty questions
                if (this.responds[i] === undefined){
                    nvr_ans.push(i+1);
                }
            }
            if (nvr_ans.length > 0){ //Prmpts if empty questions
                console.log(`Looks like you left the following question(s) not done!\nQ${nvr_ans.join(', Q')}`)
            }
            submit_q = readline.questionInt(`\n(0) Submit\n(1-${this.ask_q.length}) Change answer\n> `);
            if (submit_q > 5 || submit_q < 0 || isNaN(submit_q)){ //Ain't valid
                console.log("I don't think that's an option...");
            }
            else if (submit_q > 0){
                var check = false
                while (check === false){
                    this.printQuestion(submit_q-1);
                    if (check_pass[submit_q-1] === true){
                        console.log (`The answer is '${this.ans[submit_q-1]}'`);
                        check = true;
                    }
                    else{
                        var respond = readline.question(`\n> `);
                        if (submit_q == this.checkAns(submit_q-1, respond, canchange)){
                            check = true;
                        }
                    }
                }
            }

            else if (submit_q === 0){
                return this.responds;
            }
        }
    }

    Results(){ //Calculates and returns the result of the quiz
        var score = 0
        var returnedans = [];
        for (var i = 0; i<5; i++){
            console.log(`\nQ${i+1}: ${this.ask_q[i].question}`);
            if (this.responds[i] === undefined){
                this.responds[i] = 'Unanswered';
            }
            if (this.responds[i] === this.ans[i]){
                console.log(`[O] You answered: ${this.responds[i]}`);
                score += 5;
            }
            else{
                console.log(`[X] You answered: ${this.responds[i]}\nCorrect answer: ${this.ans[i]}`);
            }
        }
        console.log(`You scored ${score}/25! for the "${this.qname}" quiz!\n`);
        
        if (score === 0){
            console.log("Woah... That score was intentional right?");
        }
        else if (score < 15){
            console.log("Ah you failed... Try again?")
        }
        else if (score === 15){
            console.log("That was close to a pass! Think you can do better?");
        }
        else if (score === 25){
            console.log("Congratulations! You got a perfect score!!!");
        }
        returnedans = (`${this.qname}: You scored ${score}/25`);

        //This section updates the total score if there is improvement or first attempt
        if (this.quizscore < score || this.quizscore == null){
            if (this.quizscore != null){
                console.log(`Wow you improved by ${score-this.quizscore} points! Good job!`);
            }
            all_scores[choice-1] = score;
        }
        else if (this.quizscore > score){
            console.log("Dang your score went down...\nDid you know, you can check the most recent quiz result to see the answers for what you got wrong!")
        }
        else if(this.quizscore === 25 && score === 25){
            console.log("Maintaining that perfect score I see!");
        }
        return returnedans;
    }
}

function AskName(){ //Prompts for the name
    var name = readline.question("What is your name?\n> ").trim(); //Input name and it can't be blank
    var check; //Temp variable to store responds
    while (check != "Y" && check != "y"){ //Plz confirm
        while (name === ""){
            name = readline.question("Please don't leave it blank!\n> ").trim(); //No blanks
        }
        check = readline.question(`So your name is ${name}? (Y/N)\n> `);
        while (check != "Y" && check != "y" && check != "n" && check != "N"){ //Check valid
            check = readline.question(`Sorry what was that? Is your name ${name}?(Y/N)\n> `);
        }
        if (check === "n" || check === "N"){
            name = readline.question("Oops my bad. What was it?\n> ").trim();
        }
    }
    return name;
}

function CalcScore(){
    total_score = 0;
    for(var i = 0; i<5; i++){
        if (all_scores[i] != null){
            total_score += all_scores[i];
        }
    }
}

var the_great_quiz = new Quiz();
var all_scores = new Array(3);
var total_score = 0;
var free_pass = 3;
var wizard = false; //Check if personality quiz is being done
var choice;
var history = [];
var house;
var check_pass;

while (choice != 0){
    CalcScore();
    the_great_quiz.Ask();
    if (choice === 0){
        console.log(`\nBye ${name}!`);
        break;
    }
    else if (choice === the_great_quiz.quizzes.length+1){
        if (house != null){
            console.log("Wow you unlocked all the features! Good job!\n\nIf you ever want to restart a new session and keep all the features unlocked, just enter your name as 'Ex-Google Techlead'")
        }
        if (history != null){
            console.log(`${75-total_score} points left before unlocking bonus quiz`)
        }
        else{
            console.log("Lol this isn't actually a Github quiz. Check me after you do a quiz!")
        }
    }
    else if (choice === the_great_quiz.quizzes.length+2){
        console.log(`\nTotal score: ${total_score}\n`);
    }
    else if (choice === the_great_quiz.quizzes.length+3){
        if (wizard){
            console.log(`Wizarding house: ${house}`)
        }
        console.log(`\n${history}\n`);
    }
    else if (wizard){
        the_great_quiz.BecomeWizard();
        the_great_quiz.TheSortingHatSays();
    }
    else{
        the_great_quiz.DoQuiz();
        the_great_quiz.Submit();
        history.push(the_great_quiz.Results());
        history.join('\n')
    }
}