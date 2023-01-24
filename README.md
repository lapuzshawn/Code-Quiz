//******* PSUEDO CODE IN PHASES *******// 

// Phase 1 - 
Add variables needed to create questions and answers, hold values in an array 

// Phase 2 - 
Prompt user with 4 buttons for which answer they would like to compare to correctAnswers (ans1, ans2, ans3 or ans4)

// Phase 3 - 
Comparre userAnswer from prompt to correctAnswers using IF/ELSE to create a 'computerResponse/compResp'that returns "Correct/Incorrect"

// Phase 4 -
Store +1 for correct answers score back into 'scores' using a for loop. Then return 'currentScore'

// Phase 5 -  
Store 'score' value into 'currentScore' document.querySelector("#currentScore") so it will display in HTML. 

// Phase 6 -  
Link CSS so that styling will apply according to the Acceptance Criteria 

// Phase 7 - PENDING 
Debug the code IF needed. 




//******* ORIGINAL READ ME BELOW *******//
# 04 

Web APIs Challenge: Code Quiz
As you proceed in your journey to becoming a full-stack web developer, it’s likely that you’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges.

To help you become familiar with these tests and give you a chance to apply the skills from this module, this week’s Challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework will teach you all the skills you need to succeed in this assignment.

NOTE
Coding assessments are an important part of the interview process for developers. In fact, employers often use them to filter out job candidates with a cut-off score. To help you prepare, we’ve developed a set of technical interview questions that you can answer throughout the course. The difficulty level of these questions will increase as you become a more proficient developer. If you take advantage of these opportunities to practice, you should be well-prepared to shine during the technical interview process toward the end of this course!

User Story
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
Mock-Up
The following animation demonstrates the application functionality:

A GIF demonstrates a functioning quiz with a timer.
- - -
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
