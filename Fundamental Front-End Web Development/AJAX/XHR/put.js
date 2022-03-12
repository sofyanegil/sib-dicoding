const xhr = new XMLHttpRequest();

xhr.onload = function () {
  const hasil = JSON.parse(this.responseText);
  console.log(hasil);
};

xhr.onerror = function () {
  console.log("Ups something error");
};

xhr.open("POST", "https://books-api.dicoding.dev/add");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345");

const book = {
  id: 104,
  title: "Kisah Kasih di Sekolah",
  author: "Chrisye",
};

xhr.send(JSON.stringify(book));
