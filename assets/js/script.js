const startButton = document.getElementById("generator");
const nextButton = document.getElementById("nextBtn");
const questionContainer = document.getElementById("question-container");

//heading
const heading = "Answer the questions within the 60 secondsLeft, for each question you get wrong, you will be penalized by 15 seconds"
//question-object
let problem = {
question: "What is not an array?",
answer: {
  text1: String, correct: true,
  text2: Boolean, wrong: false ,
  text3: Boolean, wrong: false,
  text4: Boolean, wrong: false
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
  var start = document.getElementById("start")
  start.style.display = "none";
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
  document.getElementById("question").innerText = ("question");
}

//Start Button
function startQuiz() {
  document.getElementById("question").innerText = ("problem.question");
  generate.classList.add("hide"),
    document.getElementById("nextgen").classList.remove("hide");
    document.getElementsByClassName("btn").classList.remove("hide");
    document.getElementById("grading").classList.remove("hide");

  setNextQuestion() ;
}

generate.addEventListener("click", startQuiz)
// Add event listener to generate button
generate.addEventListener("click", setTime)

// start.disabled = false

