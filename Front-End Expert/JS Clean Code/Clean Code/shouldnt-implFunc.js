/*
  Implementasi Function yang harus dihindari
  - Hindari duplikasi kode
  - Hindari flagging pada parameter
  - Hindari efek samping
  - Hindari penulisan fungsi global
*/

// *1. Hindari duplikasi kode
// !Bad
function showFootballPlayerList(footballPlayers) {
  footballPlayers.forEach((footballPlayer) => {
    const { strName, strAvatar, strDescription, strFifaRanking } = footballPlayer;

    const data = { name: strName, avatar: strAvatar, description: strDescription, fifaRanking: strFifaRanking };

    render(data);
  });
}

function showBasketBallPlayerList(basketballPlayers) {
  basketballPlayers.forEach((basketballPlayer) => {
    const { strName, strAvatar, strDescription, strFibaRanking } = basketballPlayer;

    const data = { name: strName, avatar: strAvatar, description: strDescription, fibaRanking: strFibaRanking };

    render(data);
  });
}

// *Good
function showPlayerList(players) {
  players.forEach((player) => {
    const { strName, strAvatar, strDescription, strSport } = player;

    const data = { name: strName, avatar: strAvatar, description: strDescription };

    switch (strSport) {
      case 'football':
        data.fifaRanking = player.strFifaRanking;
        break;
      case 'basketball':
        data.fibaRanking = player.strFibaRanking;
        break;
    }

    render(data);
  });
}

// *2. Hindari flagging pada parameter
/*
  Flagging pada fungsi dapat membuat fungsi melakukan banyak hal. Ini tentu menyalahi prinsip pada materi sebelumnya.
*/

// !Bad
function printCertificate(name, signature) {
  if (signature) print(`Congrats! ${name}, signatured by: ${signature}`);
  else print(`Congrats! ${name}`);
}
/*
  Sebaiknya pecah kembali fungsi jika terdapat perubahan logika kode  
*/

// *Good
function printCertificate(name) {
  print(`Congrats! ${name}`);
}

function printCertificateWithSignature(name, signature) {
  print(`Congrats! ${name}, signatured by: ${signature}`);
}

// *3. Hindari efek samping
// !Bad
// Variabel pada cakupan global.
let ingredient = 'tomat;cabai;bawang merah;bawang putih';

const stringSplitte = (splitChar) => (ingredient = ingredient.split(splitChar));
stringSplitter(';');
// variabel ingredients berubah menjadi Array.
console.log(ingredient);

// *Good
// Variabel pada cakupan global.
const ingredients = 'tomat;cabai;bawang merah;bawang putih';

const stringSplitter = (splitChar, text) => text.split(splitChar);

const newIngredients = stringSplitter(';', ingredients);

// *4. Hindari penulisan fungsi global
// !Bad
String.prototype.isCanBeNumber = function () {
  return !!Number(this);
};
const someStringNumbers = '25';
someStringNumber.isCanBeNumber(); // -> true

// *Good
class SuperString extends String {
  isCanBeNumber() {
    return !!Number(this);
  }
}
const someStringNumber = new SuperString('25');
someStringNumber.isCanBeNumber(); // -> true
