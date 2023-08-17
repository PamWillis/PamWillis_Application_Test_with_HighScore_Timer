const startButton = document.getElementById("generator");
const questionContainer = document.getElementById("question-container");

//heading
const heading = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
//question-object
selectProblems = [
  problem = {
    question: "Commonly used data types Do Not Include?",
    correctAnswer: "Alerts",
    answer: ['Strings', 'Booleans', 'Alerts', 'Numbers']
  },
  problem = {
    question: "Arrays in javascript can be used to store ______.",
    correctAnswer: "all of the above",
    answer: ['number of strings', 'other arrays', 'booleans', 'all of the above']
  },
  problem = {
    question: "String value must be enclosed within _______ when being assigned to variables",
    correctAnswer: "parenthesis",
    answer: ['commas', 'curly brackets', 'quotes', 'parenthesis']
  },
  problem = {
    question: "A very useful tool used during developement and debugging for printing content to the debugger is?",
    correctAnswer: ["console.log"],
    answer: ['Javascript', 'terminal/bash', 'for loops', 'console.log']
  },
  problem = {
    question: "The condition in an if / else statement enclosed within ________",
    correctAnswer: "curly brackets",
    answer: ['quotes', 'curly brackets', 'parenthesis', 'square brackets']
  }
]


//Timer
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {

  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
  // var start = document.getElementById("start")
  // start.style.display = "none";
}

// Function to create and append times up image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/img/times-up-blue-text-adhesive-note-near-white-alarm-clock-against-black-backdrop-2.jpg");
  mainEl.appendChild(imgEl);

}

//fill problem
function startQuiz() {
  generate.classList.add("hide"); //hide start button
  
  for (i = 0; i < selectProblems.length; i++) {
    console.log(selectProblems.length)
    if (i<=selectProblems.length) {
  document.getElementById("question").innerHTML = problem.question;
  
  document.getElementById("answerBtn")=document.createElement("li");

    }
  }
}
  
  // selectProblems.problem.answer.forEach((answer) => console.log(answer));
  // for(answer of selectProblems.problem.answer){
  //   console.log(answer);
  // }
 
  // document.getElementById("grading").innerText = ("wrong");
  

  // for (i = 0; i <selectProblems.problem; i++) { 
  //   console.log(selectProblems.problem);

  //  } //fill answers
    // for (i = 0; i < selectProblems.problem.answer.length; i++) {
    //   selectProblems.problem.answer.forEach(i)
    //     document.createElement("ul");
    //   }
    // }
    //button click invokes comparison of click value and correct answer
    // if (selectProblems.problem.answer === selectProblems.problem.correctAnswer) {
    //   document.getElementById("grading").innerText = ("correct");
    // }
    // else {
    //   document.getElementById("grading").innerText = ("wrong");
    // }
  


generate.addEventListener("click", startQuiz)
// Add event listener to generate button
generate.addEventListener("click", setTime)


