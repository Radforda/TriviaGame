//Quesiton Objects

const question1={
    question: "What was Ashes first Pokemon?",
    answer1:"Pikachu",
    answer2:"Charmander",
    answer3:"Squirtle",
    answer1Result:correct,
    answer2Result:incorrect,
    answer3Result:incorrect,
    solution:"Pikachu was Ashes first Pokemon",
    videoSRC:"assets/images/pikachu.gif"
};
const question2={
    question: "what type of Pokemon is Pikachu?",
    answer1:"fire",
    answer2:"water",
    answer3:"electric",
    answer1Result:incorrect,
    answer2Result:incorrect,
    answer3Result:correct,
    solution:"Pikachu is an electric Pokemon",
    videoSRC:"assets/images/pikachuElectric.gif"
};
const question3={
    question: "which of these Pokemon are not an evolution of Eevee?",
    answer1:"Leafeon",
    answer2:"Charmander",
    answer3:"Umbreon",
    answer1Result:incorrect,
    answer2Result:correct,
    answer3Result:incorrect,
    solution:"Charmander is not an evolution of Evee",
    videoSRC:"assets/images/eevee.gif"
};
const question4={
    question: "What is the an evolution of Charmander?",
    answer1:"Char Char",
    answer2:"Charzard",
    answer3:"Charmean",
    answer1Result:incorrect,
    answer2Result:correct,
    answer3Result:incorrect,
    solution:"Charzard is an evolution of Charmander",
    videoSRC:"assets/images/charzard.gif"};

const question5={
    question: "what is next evolution of squirtle",
    answer1:"Warturtle",
    answer2:"Blastiod",
    answer3:"NinjaTurtle",
    answer1Result:correct,
    answer2Result:incorrect,
    answer3Result:incorrect,
    solution:"Warturtle is the next evolution of Squirtle",
    videoSRC:"assets/images/squirtle.gif"
}

const question6={
    question: "what Pokemon has a bone on it head?",
    answer1:"Squirtle",
    answer2:"Flameon",
    answer3:"Cubone",
    answer1Result:incorrect,
    answer2Result:incorrect,
    answer3Result:correct,
    solution:"Cubone has a bone on his head",
    videoSRC:"assets/images/cubone.gif"
}

//variables
const questionArray=[question1,question2,question3,question4,question5,question6];
let arrayIndex=0;
let right=0;
let wrong=0;
let outOfTime=0;
let number = 100;
var intervalId;
let score=0;
var result="";
var audio;

//start game
$(document).ready(function(){
$("#answerContent").hide();
$("#finalResults").hide();
$(".start").off().click(start);
});


//Functions
function start(){
    if (arrayIndex<questionArray.length){
    $(".start").hide();
    $("#answerContent").hide();
    $("#questionContent").show();
    $("#finalResults").hide();
    runTimer();
    current=questionArray[arrayIndex];
    $("#question").html(current.question);
    $("#answer1").html(current.answer1).off().click(current.answer1Result);
    $("#answer2").html(current.answer2).off().click(current.answer2Result);
    $("#answer3").html(current.answer3).off().click(current.answer3Result);
    return;}
    else{end();return};
};


function correct(){
    stopTimer();
    right++;
    result="Correct!";
    console.log(right);
    audio="assets/audio/win.wav";
    displayResult();
    
}

function incorrect(){
    stopTimer();
    result="Wrong!!";
    audio="assets/audio/lose.wav";
    displayResult();
    
    return;
};
function timesUp(){
    stopTimer();
    console.log("times up")
    result="Times Up!";
    audio="assets/audio/lose.wav";
    displayResult();
    return;
};

function displayResult(){
    $("#questionContent").hide();
    $("#answerContent").show();
    console.log(result);
    $("#result").text(result);
    $("#solution").text(current.solution);
    $("#video").attr("src", current.videoSRC);
    $("audio").attr("src", audio);
    arrayIndex++;
    
    setTimeout(start,3000);
    return;
    
};

function end(){
    score=Math.round((right/questionArray.length)*100);
    console.log("game done");
    $("#restart").show();
    $("#finalResults").show();
    $("questionContent").hide();
    $("#answerContent").hide();
    $("#score").text('Your final score is '+score+'%');
    right=0;
    arrayIndex=0; 
}

//timer
function runTimer() {
  number=10;
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#timer").html( number);
  if (number === 0) {
    stopTimer();
    timesUp();
    $("#timer").html("Times up!!");
  }
}

function stopTimer() {
  clearInterval(intervalId);
}




