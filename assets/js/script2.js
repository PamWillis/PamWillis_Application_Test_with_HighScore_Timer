var highestScore = 0;
var submitBtn = document.getElementById("submitBtn")
var commitHiscore = document.getElementById("commitHiscore")


let Score = localStorage.getItem("count");

function Score1() {
  document.querySelector(".score").textContent = Score;
}
Score1();

function Highpt() {
  document.querySelector(".high").textContent = High;
}
Highpt();

//add initials to local storage/pull highscore
function addInfo() {
  allDone.classList.add("hide");
  pagescore.classList.remove("hide");
  document.getElementById("initEnter").textContent = Initials;
  localStorage.setItem("Initials", "initials");
  localStorage.getItem("count");
  localStorage.setItem("highestScore", "high");
  var newScore = {
  //if count is higher than highestScore create newScore and push newScore to highestScore
  //if not newScore = highestScore
  //so when it flips to IDmyScore newScore/highestScore can be inserted on that page with initials, 
  //See function Highpt above
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