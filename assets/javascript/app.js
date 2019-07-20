console.log("hi")

var card =$("#quiz-area");

var questions = [
    {
     question: "how many season the show rick and morty has up to this date ",
     answers: ["one season","two seasons","three seasons", "four seasons"],
     correctAnswer:"three seasons"

    },
    {
        question: "Which implement does Rick use to travel between dimensions?",
        answers: ["Portal gun","Rift Ray","Jump Laser","Interdimensional Ray"],
        correctAnswer:"Portal gun"
   
    },
    {
        question: "what does wubba lubba dub dub mean?",
        answers: ["please leave","im a genius","lets party","im in great pain"],
        correctAnswer:"im in great pain"
   
    },
    {
        question: "What is the name of Morty's crush?",
        answers: ["Annie","Jessica","Summer","Heather"],
        correctAnswer:"Jessica"
   
    },
    {
        question: "Who killed Birdperson in a horrific turnabout during his wedding?",
        answers: ["Tammy","Rick","Beth","Summer"],
        correctAnswer:"Tammy"
   
    },
    {
        question: "It's not uncommon to catch Beth drinking what?",
        answers: ["Vodka and Cranberry","Rose","Red wine","White wine"],
        correctAnswer:"red wine"
   
    },
    {
        question: "In one episode, it's revealed that Rick has built a theme park inside of a homeless man. What is that theme park called?",
        answers: ["Body Land","Anatomy Park","Intestine Town","Pirates of the Pancreas"],
        correctAnswer:"Anatomy Park"
   
    },
    {
        question: "Morty does accidentally have a child who is half alien. What species is his non-human half?",
        answers: ["Smarkian","Cromulan","Gazorpazorp","Gromflomite"],
        correctAnswer:"Gazorpazorp"
   
    },
    {
        question: "Who are the creators of Rick and Morty?",
        answers: ["Rebecca Sugar and Trey Parker","Matt Groening and J.G. Quintel","Seth MacFarlane and Pendleton Ward","Dan Harmon and Justin Roiland"],
        correctAnswer:"Dan Harmon and Justin Roiland"
   
    },
    {
        question: "What is the name of this character, who Beth shot (and then realized he was in fact a long time family friend)?",
        answers: ["King Flippy Nips","Snuffles","Squanchy","Mr. Poopybutthole"],
        correctAnswer:"Mr. Poopybutthole"
   
    },
    
]
 var timer;

 var game= {

    correct: 0,
    incorrect: 0,
    counter: 180,

    countdown: function(){
         game.counter--;

         $("#couter-number").text(game.counter);
         if (game.counter === 0){
         
         game.done();
        }

    },

    start:function() {
        timer = setInterval(game.countdown, 180);

        $("#sub-wrapper").prepend(
            "<h2>Time Remaining: <span id='counter-number'>180</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        card.append("<button id='done'>Done</button>")
    },
    done: function() {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },
    result: function() {
        clearInterval(timer);
        $("#sub-wrapper h2").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>")
    }
};
$(document).on("click", "#start", function() {
    game.start();
});

$(document).on("click", "#done", function() {
    game.done();
});