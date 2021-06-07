const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
    // removed old code of asking the single question for parts 2 and 3.
// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name 
    // We ask for the canditae's name then store it in the candidateName variable.
  candidateName = input.question("Please enter your name. ");
  
  // Here I split the candidates name up based on spaces and capitalise each first letter.
  let splitName = candidateName.split(" ");

  for(let i = 0; i < splitName.length;i++){
    let tempStr = String(splitName[i]);
    let tempName = String(splitName[i][0]);
    splitName[i] = tempStr.replace(tempName, tempName.toUpperCase());
}
candidateName = splitName.join(" ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i = 0; i < questions.length; i++){
    candidateAnswers[i] = (input.question(`${[i+ 1]}) ${questions[i]} \nYour Answer: `));
    console.log(`Correct Answer: ${correctAnswers[i]} \n`)
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly 
  let numOfCorrectAnswers = 0;
  let score = 0
    // Here we have an if statement to check if the candidateAnswer is correct, if it is it congraulates them, otherwise it lets them know it was incorrect.
    for (let i = 0; i < correctAnswers.length; i++){
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){  
        // console.log(`Congratulations ${candidateName}, ${candidateAnswers[i]} is the correct answer!`) // originally had this to inform them of their answer and the correct one, but now I do it above.
        numOfCorrectAnswers +=1;
      } else {
        // console.log(`Sorry ${candidateName}, ${candidateAnswers[i]} is incorrect. The correct answer was "${correctAnswers[i]}" `) // orignally had this to inform them they had an incorrect answer but I wanted my console to match the example output.
      }  
     }
  score = (numOfCorrectAnswers / correctAnswers.length) * 100;
  let status = "";
  if (score >= 80){
    status = "PASSED";
  } else {
    status = "FAILED";
  }
  grade = `>>> Overall Grade: ${score}% (${numOfCorrectAnswers} of ${correctAnswers.length} responses correct) <<< \n>>> Status: ${status} <<<`;
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name // 
  console.log(`Candidate Name: ${candidateName}`)

  askQuestion();
  console.log(gradeQuiz(this.candidateAnswers));

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};