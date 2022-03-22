import Fighter from './Fighter.js';

class Hero extends Fighter {
  constructor(name, health, attackPower, defensePower) {
    super(name, health, attackPower, defensePower);
  }

  sayHello() {
    console.log(`My name is ${this.name}! I am a mighty hero!`);
  }
}

export default Hero;
