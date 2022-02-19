// !Expression Function
// *Fucntion tidak memiliki nama dan disimpan kedalam variabel
const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};
console.log(greeting("Egi", "French"));

function minimal(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(minimal(3, 3));

function power(a, b) {
  return a ** b;
}

console.log(power(3, 4));
