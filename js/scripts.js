

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
  } else if (num = 1 && this.turn === true) {
    this.currentPlayersScore.splice(0, this.currentPlayersScore.length, 1);
  }
  return this.currentPlayersScore;
}

Player.prototype.updatePlayerScore = function() {
  let length = this.currentPlayersScore.length;
  for (let i = 0; i < length; i = i + 1) {
    this.score = this.score + this.currentPlayersScore[i];
  }
  this.currentPlayersScore.splice(0, this.currentPlayersScore.length);
  return this.score
}

Player.prototype.aiRoll = function()  {
  let turnTotal = 0
  while (turnTotal < 20) {
    turnTotal = 0
    this.diceRoll();
    if (this.currentPlayersScore[0] === 1)  {
      this.currentPlayersScore.splice(0, this.currentPlayersScore.length);
      turnTotal = 0;
      return this.score
    } else  {
      for (let i = 0; i < this.currentPlayersScore.length; i++) {
        turnTotal += this.currentPlayersScore[i]
      }
    }
  }
  this.score += turnTotal
  this.currentPlayersScore.splice(0, this.currentPlayersScore.length);
  turnTotal = 0;
  return this.score
}

//User Interface Logic

$(document).ready(function() {

let player1 = new Player(true);
let player2 = new Player(false);

$("#ai-checkbox").click(function() {
  let checked = document.querySelector("#ai-checkbox:checked") !== null;

  do {
    console.log(player1.turn)
    console.log(player2.turn)
    if (player1.currentPlayersScore[0] === 1) {
      player1.turn = false
      player2.turn = true
    } if (player1.turn === false) {
      $("#player2-current-score").show();
      player2.aiRoll();
      console.log(player2.score);
        if (player2.currentPlayersScore[0] === 1)  {
          player1.turn = true
          player2.turn = false
          player2.currentPlayersScore.pop();
        }
      }
  } 
  while (checked === true && player2.turn === true)  
})


$("#roll").on("click", "#roll-button", function() {    
  player1.diceRoll();
  player2.diceRoll();
  $("#end").show();
  $("#kenblock").hide();
  $("#player1-current-score").text("Current Rolls " + player1.currentPlayersScore);
  $("#player2-current-score").text("Current Rolls " + player2.currentPlayersScore);
  if (player1.currentPlayersScore[0] === 1) {
    player1.turn = false
    player2.turn = true
    player1.currentPlayersScore.pop();
    $("#player2-current-score").show();
    $("#player1-current-score").hide();
    $("#kenblock").show();
    alert("You rolled a 1 :(")
    $('#ryu').hide();
    $('#ken').hide();
    $('#bros').hide();
    $("#ryublock").hide();
    $("#end").hide();
    $('#ryu-defense').hide();
    $('#ken-defense').hide();
  } else if (player2.currentPlayersScore[0] === 1)  {
    player1.turn = true
    player2.turn = false
    player2.currentPlayersScore.pop();
    $("#player1-current-score").show();
    $("#player2-current-score").hide();
    $("#ryublock").show();
    alert("You rolled a 1 :(")
    $('#ryu').hide();
    $('#ken').hide();
    $("#kenblock").hide();
    $("#end").hide();
    $('#ryu-defense').hide();
    $('#ken-defense').hide();
  }
})
  
  $("#end").on("click", "#end-turn", function() {   
   player1.updatePlayerScore();
   player2.updatePlayerScore();
   $("#player1-current-score").hide();
   $("#player2-current-score").hide();
   if (player1.turn === true) {
    $("#end").hide();
    $('#ryu').show();
    $('#ken-defense').show();
    $('#ken').hide();
    $('#bros').hide();
    $("#kenblock").hide();
    $("#ryublock").hide();
    $('#ryu-defense').hide();
    $("#player2-current-score").show();
     player1.turn = false;
     player2.turn = true;
   } else { 
    $("#end").hide();
    $('#ken').show();
    $('#ryu-defense').show();
    $('#ken-defense').hide();
    $('#ryu').hide();
    $('#bros').hide();
    $("#kenblock").hide();
    $("#ryublock").hide();
    $("#player1-current-score").show();

     player2.turn = false;
     player1.turn = true;
    }
    $("#player1-score-display").text(player1.score);
    $("#player2-score-display").text(player2.score);
  
    if (player1.score >= 100) {
      $("#player1-win").show();
      $("#kenwin").show();
      $('#ryu').hide();
      $('#bros').hide();
      $("#kenblock").hide();
      $("#ryublock").hide();
      $('#ryu-defense').hide();
      $('#ken-defense').hide();
    } else if (player2.score >= 100) {
      $("#player2-win").show();
      $("#ryuwin").show();
      $('#ryu').hide();
      $('#bros').hide();
      $("#kenblock").hide();
      $("#ryublock").hide();
      $('#ryu-defense').hide();
      $('#ken-defense').hide();
    }
  })

  
});