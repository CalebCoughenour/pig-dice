

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
  }


function Player(name, score, turn, currentPlayersScore) {
this.name = name;
this.score = 0;
this.turn = turn;
this.currentPlayersScore = [];
}

// roll prototype 

Player.prototype.diceRoll = function(){
  let num = rollDice();
  if (num != 1 && turn == true){
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
  $("#roll-button").on("click", "function(event) {
  }
});

$( "p" ).click(function() {
  $( this ).slideUp();
});
