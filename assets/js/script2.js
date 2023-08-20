var highestScore = [0];

let Score = localStorage.getItem("count");
let numScore = localStorage.getItem("count");
function Score1() {
    document.querySelector(".score").textContent = Score;
  }
Score1();
console.log(Score);
console.log(numScore);

// function higherScore() {
//   if (highestScore < numScore) {
//     highestScore.valueOf = numScore;
//   }
//   else {
//     highestScore = highestScore;
//   }
// }
// console.log(higherScore);


var initials= [];

function addInfo() {
  localStorage.setItem("initEnter",document.getElementById("initEnter").value);
  allDone.classList.add("hide");
  highScore.classList.remove("hide");
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