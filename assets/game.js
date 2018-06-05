//Quesiton Objects

const question1={
    question: "What dog beed was used as a sled dog?",
    answer1:"huskey",
    answer2:"Poodle",
    answer3:"Great Dane",
    answer1Result:correct,
    answer2Result:incorrect,
    answer3Result:incorrect,
    videoSRC:"assets/videos/dogsRunning.mp4"
};
const question2={
    question: "What dog beed was used as a guard dog?",
    answer1:"huskey",
    answer2:"Poodle",
    answer3:"Great Dane",
    answer1Class:"wrong",
    answer2Class:"wrong",
    answer3Class:"right",
    videoSRC:"assets/videos/dogWalking.mp4"
};
const question3={
    question: "What dog beed was used as a hypoalergenic dog?",
    answer1:"huskey",
    answer2:"Poodle",
    answer3:"Great Dane",
    answer1Class:"wrong",
    answer2Class:"right",
    answer3Class:"wrong",
    videoSRC:"assets/videos/puppyPlaying.mp4"
};
//variables
var questionArray=[question1,question2,question3];
var arrayIndex=0;

var number = 100;
var intervalId;

//start game
$(document).ready(function(){
$("#answerContent").hide();
$("#start").click(start);
});


//Functions
function start(){
    $("#start").hide();
    $("#answerContent").hide();
    $("#questionContent").show();
    runTimer();
    current=questionArray[arrayIndex];
    $("#question").html(current.question);
    $("#answer1").html(current.answer1).click(current.answer1Result);
    $("#answer2").html(current.answer2).click(current.answer2Result);
    $("#answer3").html(current.answer3).click(current.answer3Result);
    
};


function correct(){
    stop();
    $("#questionContent").hide();
    $("#answerContent").show();
    console.log("correct!");
    $("#result").text("Correct!");
    $("#solution").text(current.solution);
    $("#video").attr("src", current.videoSRC);
    arrayIndex++;
    setTimeout(start,3000);
    
};

function incorrect(){
    stop();
    $("#answerContent").show();
    $("#questionContent").hide();
    console.log("incorrect")
    $("#result").text("Wrong!");
    $("#solution").text(current.solution);
    $("#video").attr("src", current.videoSRC);
    arrayIndex++;
    setTimeout(start,3000);
};


//timer
function runTimer() {
  number=100;
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#timer").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    $("#timer").html("<h2>" + "Times up!!"+ "</h2>");
  }
}

function stop() {
  clearInterval(intervalId);
}




