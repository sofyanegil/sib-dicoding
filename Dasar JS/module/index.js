import { coffeeStock as stock, isCoffeMachineReady as machineReady } from './state.js';

const makeCoffee = (type, miligrams) => {
  if (stock[type] >= miligrams && machineReady) console.log('Kopi berhasil dibuat!');
  else console.log('Biji kopi habis!');
};

makeCoffee('robusta', 80);
