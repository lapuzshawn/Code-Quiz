// Variables needed for Web Quiz Challenge 
var questionIndex = 0;
var time = 15;
var timerCountId;

var answerPrompt = " ";
var highscoreText = " ";
var highscoreCount;
var userAnswer;

// variables to reference button elements in DOM 
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");

// variables to reference text elements in DOM 
var timerEl = document.getElementById("timer-count");
var choicesArrayEl = document.getElementById("choicesArray");
var questionsEl = document.getElementById("questions");
var compRespEl = document.getElementById("compResp");
var initialsEl = document.getElementById("initials");

// ****** QUIZ FUNCTIONS  ****** // 

function startGame() {
  startBtn.disabled = true; 
  // startTimer()
  timerCountId = 15;

  writeQuestions();
  console.log("start");
};


// function startTimer() {
//   // Sets timer
//   time = setInterval(function() {
//     timerCountId--;
//     timerEl.textContent = timerCountId;
//     // if (timerCount >= 0) {
//       //   // Tests if win condition is met
//     //   }
//     // // Tests if time has run out
//     // else (timerCount === 0) {
//       //   // Clears interval
//     //   clearInterval(timerElement);
//     //   loseGame();
//     // }
//   }, 1000);
// }


function writeQuestions() {
  var currentQuestion = questionsArray[questionIndex];

  var questionTitleEl = document.getElementById('questions');
  questionTitleEl.textContent = currentQuestion.question;

  console.log(questionTitleEl);
  
  var choices = currentQuestion.choicesArray[0];
  var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choices);
    choiceNode.textContent =  '1' + '. ' + choices;

  console.log(choices);
  console.log(choiceNode);

  
};















// ****** EVENT LISTENERS ****** // 

// Add event listener to generate button
startBtn.addEventListener("click", startGame);

// The winGame function is called when the win condition is met
function winGame() {
  highscoreText.textContent = "You win! Here's your score: ";
  startBtn.disabled = false;
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  
}

// The compareAnswer function is called when userAnswer has value
function compareAnswer() {
  
}


// // Write questions to the #questions input
// function writeQuestions() {
  
//   //Stores newQuestion value to be displayed in HTML via JS 
//   questionIndex.innerText = questionsArray[questionIndex].question;
//   a1Btn.innerText = questionsArray[questionIndex].ans1;
//   a2Btn.innerText = questionsArray[questionIndex].ans2;
//   a3Btn.innerText = questionsArray[questionIndex].ans3;
//   a4Btn.innerText = questionsArray[questionIndex].ans4;

// };


// // Add event listener to answer button and check for correct answer
// a1Btn.addEventListener("click", printAnswer);
// a2Btn.addEventListener("click", printAnswer);
// a3Btn.addEventListener("click", printAnswerTest);
// a4Btn.addEventListener("click", printAnswerTest);


// function printAnswer (event) {
//   questionIndex++;

//   var selectedAnswer = document.getElementById(event.target);
//   // var userAnswer = selected.dataset;
//   // console.log(userAnswer);
//   // function compareAnswer();

//   writeQuestions();
// }

// function printAnswerTest (event) {
//   questionIndex++;

//   // var selected = event.target;
//   // console.log(selected);
//   // var userAnswer = selected.dataset;
//   // console.log(userAnswer);
//   // var userAnswer = selected.dataset;
//   // console.log(userAnswer);
//   // function compareAnswer();

//   writeQuestions();
// }










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