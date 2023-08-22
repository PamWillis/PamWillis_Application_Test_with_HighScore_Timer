// This was an effort to log highscores on Page2.html
// function view() {
//     if (localStorage.getItem('highscores') != null) {
      var highscores = localStorage.getItem("highscores");
      document.getElementById("Results").innerHTML = JSON.stringify(highscores[0].initials + " scored " + highscores[0].score);

  console.log(highscores);
  
