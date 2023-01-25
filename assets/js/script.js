// Variables needed for Web Quiz Challenge 

var question = " ";
var answerPrompt = " ";
var highscoreText = " ";
var highscoreCount;
var indexQ;
var timer;
var timerCount;
var userAnswer;

// Assignment code here // Get references to the #start element
var startBtn = document.querySelector("#start");
var timerElement = document.querySelector("#timer-count");
var compResp = document.querySelector("#compResp");
var question = document.querySelector("#questions");
// var aBtn = document.querySelector("#btn");
var a1Btn = document.querySelector("#ans1");
var a2Btn = document.querySelector("#ans2");
var a3Btn = document.querySelector("#ans3");
var a4Btn = document.querySelector("#ans4");




// Add event listener to generate button
startBtn.addEventListener("click", startGame);

function startGame() {
  startBtn.disabled = true; 
  indexQ = 0;
  writeQuestions();
  timerCount = 15;
  // startTimer()
  console.log("start");
};


function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // if (timerCount >= 0) {
    //   // Tests if win condition is met
    //   }
    // // Tests if time has run out
    // else (timerCount === 0) {
    //   // Clears interval
    //   clearInterval(timerElement);
    //   loseGame();
    // }
  }, 1000);
}

// The winGame function is called when the win condition is met
function winGame() {
  highscoreText.textContent = "You win! Here's your score: ";
  startButton.disabled = false;
}

// The loseGame function is called when timer reaches 0
function loseGame() {

}

// The compareAnswer function is called when userAnswer has value
function compareAnswer() {

}


// Write questions to the #questions input
function writeQuestions() {

  //Stores newQuestion value to be displayed in HTML via JS 
  question.innerText = questionsArray[indexQ].question;
  a1Btn.innerText = questionsArray[indexQ].ans1;
  a2Btn.innerText = questionsArray[indexQ].ans2;
  a3Btn.innerText = questionsArray[indexQ].ans3;
  a4Btn.innerText = questionsArray[indexQ].ans4;

};


// Add event listener to answer button and check for correct answer
a1Btn.addEventListener("click", printAnswer);
a2Btn.addEventListener("click", printAnswer);
a3Btn.addEventListener("click", printAnswerTest);
a4Btn.addEventListener("click", printAnswerTest);


function printAnswer (event) {
  indexQ++;

  var selectedAnswer = document.getElementById(event.target);
  // var userAnswer = selected.dataset;
  // console.log(userAnswer);
  // function compareAnswer();

  writeQuestions();
}

function printAnswerTest (event) {
  indexQ++;

  // var selected = event.target;
  // console.log(selected);
  // var userAnswer = selected.dataset;
  // console.log(userAnswer);
  // var userAnswer = selected.dataset;
  // console.log(userAnswer);
  // function compareAnswer();

  writeQuestions();
}









//list of Questions
var questionsArray = [
  { question: 'what is 1+1?',
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "4",
    answer: 2, 
  },
  { question: 'what is 2+1?',
  ans1: "2",
  ans2: "x",
  ans3: "3",
  ans4: "4",
  answer: 3, 
  },
  { question: 'what is 3+1?',
  ans1: "3",
  ans2: "2",
  ans3: "4",
  ans4: "x",
  answer: 3, 
  }

]


// ***** WRITE THIS LATER ***** //

// Generate questions function 

  // function generateQuestions() {

  // }

  // function getPrompts() {

  // }

  // function correctAns() {
    
  //   console.log("incorrect");
  // };



// ***** FIX THIS ***** //



  // if (question === answerPrompt) {
  //   //Stores compResp value to be displayed in HTML via JS 
  //   //Adds 1 point to score
  //   compResp.value = "Correct";
  //   score++;
    
  // } else {
  //   //Stores compResp value to be displayed in HTML via JS 
  //   //removes 15 secs from timer
  //   compResp.value = "incorrect";
  //   timer--;
  // }
  // return compResp;

  //Move to next question



// ***** USE THIS TO DEBUG ***** //

// function printAnswer () {
//   console.log("this");
//   writeQuestions();
//   indexQ++
// }
// function printAnswer2 () {
//   console.log("this2");
//   writeQuestions();
//   indexQ++;
// }