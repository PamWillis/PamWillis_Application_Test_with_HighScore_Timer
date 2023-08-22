// This was an effort to log highscores on Page2.html
// function view() {
//     if (localStorage.getItem('highscores') != null) {
      var highscores = localStorage.getItem("highscores");
      document.getElementById("Results").innerHTML = JSON.stringify(highscores);

  console.log(highscores);
  
