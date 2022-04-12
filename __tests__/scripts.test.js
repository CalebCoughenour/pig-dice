// import { exportAllDeclaration } from '@babel/types';
import { rollDice } from './../src/scripts.js';

describe('rollDice', () => {

  test('should produce a random number 1-6', () => {
    const roll = rollDice();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThan(7);
  });
});

