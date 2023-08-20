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


submitBtn.addEventListener("click", addInfo);