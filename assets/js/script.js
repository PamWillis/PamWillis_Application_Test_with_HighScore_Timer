


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
// Add event listener to generate button
generate.addEventListener("click", setTime);
start.disabled = false;





//add event listener to answers
button1.addEventListener("click", response1);
function response1 () {
  response1=false;
  console.log("wrong"); 
  if (response1=false) {
    document.getElementById("grade").innerHTML = "wrong";
   } 
 }
 
button2.addEventListener("click", response2);
function response2 () {
  response2=false;
  console.log("wrong");
  if (response2=false) {
    document.getElementById("grade").innerHTML = "wrong";
   }
 }

button3.addEventListener("click", response3);
function response3 () {
  response3=true;
  console.log("correct");
  if (response3=true) {
    document.getElementById("grade").innerHTML = "correct";
   } 
 }

button4.addEventListener("click", response4);
function response4 () {
  response4=false;
  console.log("wrong");
  if (response4=false) {
    document.getElementById("grade").innerHTML = "wrong";
   }
}













// var answer =[strings, booleans, alerts, numbers]
// for (i=0, i<4, i++) {
//   if (strings || booleans || numbers) {
//     console.log(wrong);
//   }
//   else {
//   console.log(correct);
// }
// }


// clearInterval(timer);