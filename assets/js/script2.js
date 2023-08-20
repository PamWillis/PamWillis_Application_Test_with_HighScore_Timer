let Score = localStorage.getItem("count");
console.log(Score);
function Score1() {
    document.querySelector(".score").textContent = Score;
  }
Score1();
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
  //figure out which is the hightest number
}
submitBtn.addEventListener("click", addInfo);
goBack.addEventListener("click", startAgain);
commitHiscore.addEventListener("click", submitFinal);