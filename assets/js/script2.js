let Score = localStorage.getItem("count");
console.log(Score);
function Score1() {
    document.querySelector(".score").textContent = Score;
  }
Score1();
var initials= [];

function addInfo() {
  
  let letters = document.getElementsByTagName("label");
  console.log(letters);
  localStorage.setItem(letters, "string");
  allDone.classList.add("hide");
  highScore.classList.remove("hide");
}
function startAgain() {
  window.location.href = "index.html";
}
function submitFinal() {
  //copy high score to final score
}
submitBtn.addEventListener("click", addInfo);
goBack.addEventListener("click", startAgain);
commitHiscore.addEventListener("click", submitFinal);