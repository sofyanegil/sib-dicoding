// !Function
function greeting() {
  console.log("Good Morning!");
}

greeting();

// *Parameter
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 3));

function greetings(name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
}
let greetingMessage = greetings("Egi", "English");
console.log(greetingMessage);
