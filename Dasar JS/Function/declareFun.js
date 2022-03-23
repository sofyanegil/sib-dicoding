// !Declaring Function
// *Parameter
function multiply(a, b) {
  // *Argument
  return a * b;
}

const result = multiply(5, 6);

// *return argument
function greeting(name, language) {
  if (language === 'English') return `Good Morning ${name}!`;
  else if (language === 'French') return `Bonjour ${name}!`;
  else return `Selamat Pagi ${name}!`;
}
const greetingMessage = greeting('Egi', 'French');
console.log(greetingMessage);

// *Expression Function
const greetings = function (name, language) {
  if (language === 'English') return 'Good Morning ' + name + '!';
  else if (language === 'French') return 'Bonjour ' + name + '!';
  else return 'Selamat Pagi ' + name + '!';
};

console.log(greetings('Egi', 'French'));
