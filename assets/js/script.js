const startButton = document.getElementById("generator");
const questionContainer = document.getElementById("question-container");
var choicesSection = document.getElementById("answerBtn");
var index = 0;
var count = 0;

//heading
const heading = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";

//question-array
var selectProblems = [
  {
    prob: [1],
    question: "Commonly used data types Do Not Include?",
    correctAnswer: "Alerts",
    choices: ['Strings', 'Booleans', 'Alerts', 'Numbers']
  },
  {
    prob: [2],
    question: "Arrays in javascript can be used to store ______.",
    correctAnswer: "all of the above",
    choices: ['number of strings', 'other arrays', 'booleans', 'all of the above']
  },
  {
    prob: [3],
    question: "String value must be enclosed within _______ when being assigned to variables",
    correctAnswer: "quotes",
    choices: ['commas', 'curly brackets', 'quotes', 'parenthesis']
  },
  {
    prob: [4],
    question: "A very useful tool used during developement and debugging for printing content to the debugger is?",
    correctAnswer: ["console.log"],
    choices: ['Javascript', 'terminal/bash', 'for loops', 'console.log']
  },
  {
    prob: [5],
    question: "The condition in an if / else statement enclosed within ________",
    correctAnswer: "parenthesis",
    choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets']
  }
]
function nextPage() {
  console.log(index);
  if (index === 5 || secondsLeft === 0) {
    // console.log("count")
    localStorage.setItem("count", count);
    // window.location.href = "Page2.html";
    

  }
}

//Timer
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 30;

function setTime() {

  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      localStorage.setItem("count", count);
      // window.location.href = "Page2.html";

    }

  }, 1000);
  // var start = document.getElementById("start")
  // start.style.display = "none";
}
 //compares choice/grades/adjust time as needed/adds point as needed
 function checkAnswers() {
  console.log("I have been clicke")
  console.log(this)
  console.log(this.innerHTML)
  if (this.innerHTML === selectProblems[index].correctAnswer) { //correct add point
    console.log("correct");
    document.getElementById('grading').innerHTML = ('CORRECT');
    count++; // log 1pt
    console.log(count);
    choicesSection.innerHTML = ""; //clears choices for next time
    //nextProb();

  }
  // else if (secondsLeft>=10) { //wrong, no points
  //   console.log("wrong");
  //   document.getElementById('grading').innerHTML = ('WRONG');
  //   secondsLeft = secondsLeft - 10; //takes time off clock
  //   choicesSection.innerHTML = ""; //clears choices for next time
  //   console.log(secondsLeft);
  //   nextProb();
  // }
  else { //wrong, no points
    console.log("wrong");
    document.getElementById('grading').innerHTML = ('WRONG');
    secondsLeft = secondsLeft - 10; //takes time off clock
    choicesSection.innerHTML = ""; //clears choices for next time
    console.log(secondsLeft);
    //nextProb();
  }
  //After we check is the choice icked is correct or not, then we will add 1 to indexx to move on the next questions

  index++
  //before we move on tothe next question we check to see if index is 5 , which means we have already reach the final question 
  if (index >= 5 || secondsLeft <= 0) {
    //this will take you to the end page
    // console.log("count")
    localStorage.setItem("count", count);
    // window.location.href = "Page2.html";
    // pg1central2.classList.remove("hide");
    pagescore.classList.remove("hide");
    

  }
  else{
    //show the next question
    showQuestions();
  }


}
//at moment of clicking Start
function startQuiz() {
  // start.classList.add("hide"); //hide start button

  setTime() //starts time

  showQuestions(); //first question


}

function showQuestions(){
    
    //Showiing the question
    document.getElementById('question').innerHTML = selectProblems[index].question;
    console.log(selectProblems[index].choices)
     
    //adds choices
    for (var i = 0; i < selectProblems[index].choices.length; i++) {
      var buttonEl = document.createElement("button")
      buttonEl.classList.add("btn")
      buttonEl.textContent = selectProblems[index].choices[i]
      buttonEl.addEventListener("click", checkAnswers)
      choicesSection.appendChild(buttonEl)
    }

}

generate.addEventListener("click", startQuiz)
// Add event listener to generate button
//generate.addEventListener("click", setTime)

