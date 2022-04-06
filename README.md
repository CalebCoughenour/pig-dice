1. When user clicks play, a dice will roll
2. based off the dice roll, points will be added to score
3. if user rolls a 1, player loses points for round and next players turn
4. if a user wants to end turn after roll, they can and will push points to their score
5. Next players turn, same rules as above
6. Game ends when first player hits 100 points


Describe: rollDice()

Test: "It should output a random number 1-6"
Code: diceRoll();
Expected Output: 1-6

Describe: Player.diceRoll()

Test: "It will store a random number"
Code: let num = rollDice();
Expected Output: num = 1-6

Test: "It will add number rolled to score of player"
Code: let num = rollDice();
  if (num != 1){
    this.currentPlayersScore.push(num);
Expected Output: currentPlayersScore = [1-6]

Test: "It will zero out currentPlayersScore array if a 1 is rolled"
Code: this.currentPlayersScore.splice(0, this.currentPlayersScore.length, 0);
  this.turn = false;
Expected Output: currentPlayerScore = [0]