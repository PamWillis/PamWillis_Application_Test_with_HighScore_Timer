const startButton = document.getElementById("generator");
const nextButton = document.getElementById("nextBtn");
const questionContainer = document.getElementById("question-container");

//heading
const heading = "Answer the questions within the 60 secondsLeft, for each question you get wrong, you will be penalized by 15 seconds"
//question-object
let problem = {
  question: "Which is not an array?",
  correctAnswer: "Alerts",
  answer: {
    text1: "String",
    text2: "Boolean",
    text3: "Alerts",
    text4: "Numbers",
  }
}
let problem2 = {
  question: "Where is UNC?",
  correctAnswer: "Chapel Hill",
  answer: {
    text1: "Chapel Hill",
    text2: "Washington DC",
    text3: "Boston",
    text4: "Juno",
  }
}

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

//first question
function setNextQuestion() {

  document.getElementById("question").textContent = problem.question;
  document.getElementById("choiceA").textContent = problem.answer.text1;
  document.getElementById("choiceB").textContent = problem.answer.text2;
  document.getElementById("choiceC").textContent = problem.answer.text3;
  document.getElementById("choiceD").textContent = problem.answer.text4;

}

//Start Button
function startQuiz() {
  //document.getElementById("question").innerText = (problem1.question);
  generate.classList.add("hide"),
    document.getElementById("nextgen").classList.remove("hide");
  document.getElementById("grading").classList.remove("hide");
  console.log(document.getElementsByClassName("btn"))
  var choicesElement = document.getElementById("answerBtn");
  choicesElement.classList.remove("hide")
  choicesElement.classList.add("btn-grid")




  setNextQuestion();
}
//matching correct answer to button
function checkAnswer1() {
  if (problem.answer.text1 === problem.correctAnswer) {
    console.log("correct");
    document.getElementById("grading").innerText = ("correct");
  }
  else {
    console.log("wrong");
    document.getElementById("grading").innerText = ("wrong");
  }

  [...document.getElementsByClassName("btn")].forEach((element)=>{
    element.disabled=true;
  });
}
function checkAnswer2() {
  if (problem.answer.text2 === problem.correctAnswer) {
    console.log("correct");
  }
  else {
    console.log("wrong")
  }
}
function checkAnswer3() {
  if (problem.answer.text3 === problem.correctAnswer) {
    console.log("correct");
    document.getElementById("grading").innerText = ("correct3");
  }
  else {
    console.log("wrong")
    document.getElementById("grading").innerText = ("wrong3");
  }
}
function checkAnswer4() {
  if (problem.answer.text4 === problem.correctAnswer) {
    console.log("correct");
  }
  else {
    console.log("wrong")
  }
}


document.getElementById("choiceA").addEventListener("click", checkAnswer1)
document.getElementById("choiceB").addEventListener("click", checkAnswer2)
document.getElementById("choiceC").addEventListener("click", checkAnswer3)
document.getElementById("choiceD").addEventListener("click", checkAnswer4)

generate.addEventListener("click", startQuiz)
// Add event listener to generate button
generate.addEventListener("click", setTime)

// start.disabled = false

