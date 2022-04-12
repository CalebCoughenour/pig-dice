export function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
  }


export function Player(turn) {
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
  } else if (num === 1 && this.turn === true) {
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