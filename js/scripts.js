

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
  }


function Player(turn) {
this.name = "";
this.score = 0;
this.turn = turn;
this.currentPlayersScore = [];
}

// roll prototype 

Player.prototype.diceRoll = function(){
  let num = rollDice();
  if (num != 1 && this.turn == true){
    this.currentPlayersScore.push(num);  
  } else {
  this.currentPlayersScore.splice(0, this.currentPlayersScore.length, 0);
  this.turn = false;
  }
  return this.currentPlayersScore;
}

Player.prototype.updatePlayerScore = function() {
  let length = this.currentPlayersScore.length;
  for (let i = 0; i < length; i = i + 1) {
    this.score = this.score + this.currentPlayersScore[i];
  }
  this.currentPlayersScore.splice(0, this.currentPlayersScore.length, 0);
  return this.score
}

//User Interface Logic

$(document).ready(function() {

let player1 = new Player(true);
let player2 = new Player(false);

  $("#buttons").on("click", "#roll-button", function() {    
   player1.diceRoll();
   player1.updatePlayerScore();
   console.log(player1);
   player2.diceRoll();
   player2.updatePlayerScore();
   console.log(player2);
  $("player1-score-display").text(player1.score);
  $("player2-score-display").text(player2.score);
  })
})

// $( "p" ).click(function() {
//   $( this ).slideUp();
// });
