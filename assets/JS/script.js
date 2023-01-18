// Variables needed for Password Generator Challenge 

var question = " ";
var answerPrompt = " ";


// Assignment code here // Get references to the #start element
var startBtn = document.querySelector("#start");
var compResp = document.querySelector("#compResp");

// Add event listener to generate button
startBtn.addEventListener("click", writeQuestions);

// Write questions to the #questions input
function writeQuestions() {

  question = document.querySelector("#questions");
  //Stores newQuestion value to be displayed in HTML via JS 
  question.value = newPassword;

  if (question === answerPrompt) {
    //Stores compResp value to be displayed in HTML via JS 
    //Adds 1 point to score
    compResp.value = "Correct";
    score++;
    
  } else {
    //Stores compResp value to be displayed in HTML via JS 
    //removes 15 secs from timer
    compResp.value = "incorrect";
    timer--;
  }
  // return compResp;

  //Move to next question
};

// Generate questions function 
function generateQuestions() {

}

function getPrompts() {

}

//FIX THIS









