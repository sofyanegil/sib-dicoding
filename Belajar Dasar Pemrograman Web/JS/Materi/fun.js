// !Function

function greeting(name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
}

let greetingMessage = greeting("Sofyan", "French");
console.log(greetingMessage);

// *Function bisa mengembalikan nilai
function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2);
console.log(result);
