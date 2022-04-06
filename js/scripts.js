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
  



function Player(name, score, turn) {
this.name = name;
this.score = score;
this.turn = turn;
}

// roll prototype 

Player.prototype.diceRoll = function(){
  let num = rollDice();
  this.score = this.score + num;
  return this.score;
}




  // return `${this.name} rolled ${this.score}` 