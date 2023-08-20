let Score = localStorage.getItem("count");
console.log(Score);
function Score1() {
    document.querySelector(".score").textContent = Score;
  }
Score1();