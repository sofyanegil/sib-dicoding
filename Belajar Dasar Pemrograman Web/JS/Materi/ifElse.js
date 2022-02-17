// ! if else condition untuk mengatur flow
let x = 50;

if (x > 70) {
  console.log(x);
} else {
  console.log("Nilai kurang dari 70");
}

let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayogozaimasu!";
}

console.log(greeting);
