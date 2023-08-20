var highestScore = 0;
var submitBtn = document.getElementById("submitBtn")
var commitHiscore = document.getElementById("commitHiscore")


let Score = localStorage.getItem("count");

function Score1() {
  document.querySelector(".score").textContent = Score;
}
Score1();

// function Highpt() {
//   document.querySelector(".high").textContent = High;
// }
// Highpt();

//add initials to local storage/pull highscore
function addInfo() {
  allDone.classList.add("hide");
  pagescore.classList.remove("hide");
  document.getElementById("initEnter").textContent = "Initials";
  localStorage.setItem("Initials", "initials");
  localStorage.getItem("count");
  localStorage.setItem("highestScore", "high");
   // get value of input 
   var initials = document.getElementById("initEnter").value.trim();
   // make sure value wasn't empty
   if (initials !== '') {
     // get saved scores from localstorage, or if not any, set to empty array
     var highscores =
       JSON.parse(window.localStorage.getItem('highestscores')) || [];

  var newScore = {
    score: Score,
    initials: initials,
  };
  // save to localstorage
  high.push(newScore);
 localStorage.setItem('highscores', JSON.stringify(highestScore));
  }
}

function startAgain() {
  window.location.href = "index.html";
}
function submitFinal() {
  localStorage.getItem("count")
  //figure out which is the highest number
}
submitBtn.addEventListener("click", addInfo);
goBack.addEventListener("click", startAgain);
commitHiscore.addEventListener("click", submitFinal);