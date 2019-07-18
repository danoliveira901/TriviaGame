console.log("hi")

var card = $("#quiz-area");

var questions = [
    {
     question: "wich show there is a a magical princes ",
     answers: ["star vc the forces of evill","gravity falls","the all house"],
     correctAnswer:"star vc the forces of evill"

    },
    {
        question: "the jornal 3 belongs to who in gravity falls  ",
        answers: ["Dipper","Mabel","stan","sus", "gruncle ford "],
        correctAnswer:"dipper"
   
    },
    {
        question: "mabel from gravity fals have wich pet?",
        answers: ["pig","goat","parrot","ferry"],
        correctAnswer:"pig"
   
    },
    {
        question: "the jornal 3 belongs to who in gravity falls  ",
        answers: ["Dipper","Mabel","stan","sus"],
        correctAnswer:"dipper"
   
    },
    {
        question: "the jornal 3 belongs to who in gravity falls  ",
        answers: ["Dipper","Mabel","stan","sus"],
        correctAnswer:"dipper"
   
    },
    {
        question: "the jornal 3 belongs to who in gravity falls  ",
        answers: ["Dipper","Mabel","stan","sus"],
        correctAnswer:"dipper"
   
    },
    {
        question: "the jornal 3 belongs to who in gravity falls  ",
        answers: ["Dipper","Mabel","stan","sus"],
        correctAnswer:"dipper"
   
    },
    {
        question: "the jornal 3 belongs to who in gravity falls  ",
        answers: ["Dipper","Mabel","stan","sus"],
        correctAnswer:"dipper"
   
    },
    {
        question: "the jornal 3 belongs to who in gravity falls  ",
        answers: ["Dipper","Mabel","stan","sus"],
        correctAnswer:"dipper"
   
    },
    {
        question: "the jornal 3 belongs to who in gravity falls  ",
        answers: ["Dipper","Mabel","stan","sus"],
        correctAnswer:"dipper"
   
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
         if (game.counter === 0)
         console.log("Bill sifer your soul");
         game.done();

    },

    start:function() {

        timer = setInterval( game.countdown ,1000);
        $("#sub-wapper").prepend(
            "<h2>time remaining:<span id='#counter-number'>180</span>seconds</h2>"
        );
        

    }


 }