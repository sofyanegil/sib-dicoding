// Mengambil seluruh element yang memiliki class button
const buttons = document.querySelectorAll(".button");

// playButon diisi dengan element class button dengan index 3 dari nodeList
const playButton = buttons[3];

// playButtonElement diisi dengan child dari playButton yaitu button Play coming soon
const playButtonElement = playButton.childNodes[0];

// Mengatur atribut pada playButtonElement menjadi disabled
playButtonElement.setAttribute("disabled", "disabled");

// Mengambil element gambar
const gambar = document.getElementById("gambar");

// Mengatur atribut width gambar menjadi 300px
gambar.setAttribute("width", 300);
