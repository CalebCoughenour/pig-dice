import { rollDice, Player } from './../src/scripts.js';

describe('rollDice', () => {

  test('should produce a random number 1-6', () => {
    const roll = rollDice();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThan(7);
  });
});



describe('Player', () => {

  test('should receive turn status and output a player object', () => {

    let newPlayer = new Player(true);
    expect(newPlayer.turn).toEqual(true);
  });

  test('should build a whole Player object', () => {

    let newPlayer = new Player(true);
    expect(newPlayer.score).toEqual(0);
    expect(newPlayer.turn).toEqual(true);
    expect(newPlayer.currentPlayersScore).toEqual([]);
  });
});

describe('Player.diceRoll', () => {
  let reusablePlayer;

  beforeEach(() => {
    reusablePlayer = new Player(true);
  });

  test('should store a random number', () => {
    expect(reusablePlayer.diceRoll()).toBeGreaterThanOrEqual(1);
    expect(reusablePlayer.diceRoll()).toBeLessThan(7);
  });
});

