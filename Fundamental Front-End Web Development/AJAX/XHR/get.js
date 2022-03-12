const xhr = new XMLHttpRequest();

xhr.onload = function () {
  const hasil = JSON.parse(this.responseText);
  console.log(hasil);
};

xhr.onerror = function () {
  console.log("Ups something error");
};

xhr.open("GET", "https://books-api.dicoding.dev/list");
xhr.send();
