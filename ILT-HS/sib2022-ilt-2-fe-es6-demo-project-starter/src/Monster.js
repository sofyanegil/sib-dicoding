import Fighter from './Fighter.js';
class Monster extends Fighter {
  constructor(name, health, attackPower, defensePower) {
    super(name, health, attackPower, defensePower);
  }
}

export default Monster;
