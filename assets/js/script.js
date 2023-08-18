const startButton = document.getElementById("generator");
const questionContainer = document.getElementById("question-container");
const index = 0;
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
    correctAnswer: "parenthesis",
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
    correctAnswer: "curly brackets",
    choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets']
  }
]


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
//compares clicked button to correctAnswer


//at moment of clicking Start
function startQuiz() {
  
  setTime() //starts time
  start.classList.add("hide"); //hide start button
  questionContainer.classList.remove("hide"); //hide heading

  
  //Showiing the question
  document.getElementById('question').innerHTML = selectProblems[index].question;
  console.log(selectProblems[index].choices)
  var choicesSection = document.getElementById("answerBtn")
  
  //First choice
  // var buttonEl = document.createElement("button")
  // buttonEl.textContent = selectProblems[index].choices[0]
  // choicesSection.appendChild(buttonEl)

  //adds choices
  for (var i = 0; i < selectProblems[index].choices.length; i++) {
    var buttonEl = document.createElement("button")
    buttonEl.classList.add("btn")
    buttonEl.textContent = selectProblems[index].choices[i]
    buttonEl.addEventListener("click", checkAnswers)
    choicesSection.appendChild(buttonEl)
  }
  //compares choice/grades/adjust time as needed/adds point as needed
  function checkAnswers() {
    console.log("I have been clicke")
    console.log(this)
    console.log(this.innerHTML)
    if (this.innerHTML === selectProblems[index].correctAnswer) {
      console.log("correct");
      document.getElementById('grading').innerHTML = ('CORRECT');
      count++; // log 1pt
      console.log(count);
      //switch to next problem, continue thru for loop

    }
    else {
      console.log("wrong");
      document.getElementById('grading').innerHTML = ('WRONG');
      count = count;
      console.log(count);
      secondsLeft = secondsLeft - 10;
      //need to switch to next prob, continue thru for loop
    }
  }

  // for (var x=selectProblems[index].length; x<=4; x++) {
  // console.log (x);

}






generate.addEventListener("click", startQuiz)
// Add event listener to generate button
//generate.addEventListener("click", setTime)


