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

class SortingHat{
    constructor(name, Q1, Q2, Q3, Q4, Q5){
        this.name = name; //Quiz name
        this.questions = [Q1, Q2, Q3, Q4, Q5]; //Stores the questions from MCQ class
        this.gryffindor = [2, 1, 4, 3, 1];
        this.hufflepuff = [4, 3, 2, 4, 3];
        this.ravenclaw = [1, 2, 3, 1, 4];
        this.slytherin = [3, 4, 1, 2, 2];
        this.houses = [this.gryffindor, this.hufflepuff, this.ravenclaw, this.slytherin];
        for (var i = 0; i<4; i++){
            var temphouse = this.houses[i];
            var tempanswers = []
            for (var j = 0; j<5; j++){
                tempanswers.push(this.questions[j].options[temphouse[j]-1])
            }
            this.houses[i] = tempanswers;
        }
    }
}

var yer_a_wizard = new SortingHat(`Yer a Wizard ${name}`,
                (new MCQ(`Ready to go to wizarding school ${name}? Well before we do that, you need to pick a wand core!`, `Unicorn Hair`, `Pheonix Feathers`, `Dragon Heartstring`, `Kelpie Hair`)),
                (new MCQ(`On your way home, you bumped into a nasty acquaintance who insulted you by calling you __________.`, `A coward`, `Ignorant`, `Selfish`, 'Ordinary')),
                (new MCQ(`Your great-aunt has invited you over to her house to congratulate you on your admission and you're finally allowed to go into her secret garden. What would you look at first?`, `A silver tree with golden apples`, `Talking Toadstools`, `Statue with a twinkling eye`, `Luminous Pool with something in its depths`)), 
                (new MCQ(`Right before you leave your home for Hogwarts, you parents show you four boxes. You get to pick one`, `A plain jet black box with a silver rune that you know to be the mark of Merlin.`, `A golden box with carved feet that warns secret knowledge and unbearable temptation lurk within.`, `A plain pewter box that says “I open only for the worthy."`, `A tortoiseshell box that sounds like something living is squeaking inside.`)),
                (new MCQ(`There's a welcome party for the new students and you see four goblets placed before you. Which do you drink?`, `The golden potion that gives off bright sunspots that dance around the room.`, `A silvery, glittery potion that sparkles as if containing ground diamonds.`, `A thick potion that smells of plums and chocolate.`, `A black, inky potion that gives off fumes that make you see strange visions.`)));

var name = "Henggy"
console.log(yer_a_wizard.houses[0][1])