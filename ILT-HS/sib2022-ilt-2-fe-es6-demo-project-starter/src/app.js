import Monster from './Monster.js';
import Hero from './Hero.js';

function main() {
  const link = new Hero('Link', 100, 45, 5);
  const ganon = new Monster('Ganon', 100, 25, 15);

  link.sayHello();

  link.attack(ganon);
  ganon.attack(link);
  link.attack(ganon);
  link.attack(ganon);
  link.attack(ganon);
}

main();
