// function rollDice() {
//   const dice = [...document.querySelectorAll(".die-list")];
//   dice.forEach(die => {
//     toggleClasses(die);
//     die.dataset.roll = getRandomNumber(1, 6);
//   });
// }

// function toggleClasses(die) {
//   die.classList.toggle("odd-roll");
//   die.classList.toggle("even-roll");
// }

// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// document.getElementById("roll-button").addEventListener("click", rollDice);



function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
  }


function Player(name, score, turn, currentPlayersScore) {
this.name = name;
this.score = score;
this.turn = turn;
this.currentPlayersScore = [];
}

// roll prototype 

Player.prototype.diceRoll = function(){
  let num = rollDice();
  if (num != 1){
    this.currentPlayersScore.push(num);  
  } else {
  this.currentPlayersScore.splice(0, this.currentPlayersScore.length, 0);
  this.turn = false;
  }
  return this.currentPlayersScore;
}




  // return `${this.name} rolled ${this.score}` 