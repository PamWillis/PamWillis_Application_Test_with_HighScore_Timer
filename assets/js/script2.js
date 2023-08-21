
var submitBtn = document.getElementById("submitBtn")
var commitHiscore = document.getElementById("commitHiscore")
let Score = localStorage.getItem("count");
//this creates a variable called highscores that looks in local storage for a key called 'highscores' if it is not found it becomes an empty array 
var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

console.log(highscores)

// function Score1() {
document.querySelector(".score").textContent = Score;
//}
// Score1();
//post score to page
// let theScore = localStorage.getItem("highscores");

// function postScore() {
//   document.querySelector(".high").textContent = theScore;
// }

// postScore();

//add initials to local storage/pull highscore
function addInfo() {
  allDone.classList.add("hide");
  pagescore.classList.remove("hide");
  document.getElementById("initEnter").textContent = "initials";
  localStorage.setItem("initials", "initials");

  // get value of input 
  var initials = document.getElementById("initEnter").value.trim();
  //  // make sure value wasn't empty
  if (initials !== '') {

    //This combines the initials with the score into a variable called newScore
    var newScore = {
      score: Score,
      initials: initials
    };
    // this takes the array from the previous score and adds in newScore
    highscores.push(newScore);
    //this pushes the array of scores into local storage
    localStorage.setItem('highscores', JSON.stringify(highscores));
    //document.querySelector(".high").textContent = theScore;

  }
}
function startAgain() {
  window.location.href = "index.html";
}
function submitFinal() {
}
submitBtn.addEventListener("click", addInfo);
goBack.addEventListener("click", startAgain);
commitHiscore.addEventListener("click", submitFinal);