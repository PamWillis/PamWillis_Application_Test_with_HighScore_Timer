const startButton =document.getElementById("generator");
const nextButton = document.getElementById("nextBtn");
const questionContainer = document.getElementById("question-container");


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

// setTime();

//Start Button
function setNextQuestion() {
  questionElement.innerText =questions.questions;
  }

function startQuiz() {
document.getElementById("question").innerText = ("heading");
generate.classList.add("hide"),
document.getElementById("nextgen").classList.remove("hide"),
setNextQuestion()
}
document.getElementById
generate.addEventListener("click", startQuiz)
// Add event listener to generate button
generate.addEventListener("click", setTime)

start.disabled = false

//heading
heading = ["Answer the questions within the 60 secondsLeft, for each question you get wrong, you will be penalized by 15 seconds"];
//question-object
question = "What is not an array?"
answer: [
  {text: String, correct:true},
  {text: Boolean, wrong:false}
]






//add event listener to answers
button.addEventListener("click", response);
function response () {
  response=false;
  console.log("wrong"); 
  if (response=false) {
    document.getElementElem("button").innerHTML = "wrong";
   } 
 }
 