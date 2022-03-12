const data = {
  error: false,
  message: "success",
  "book list": [
    {
      id: 1,
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
    },
    {
      id: 2,
      title: "Filosofi Kopi",
      author: "Dewi Lestari",
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C Martin",
    },
  ],
};

console.log(`Error? ${data.error}`);
console.log("Daftar Buku: ");
data["book list"].forEach((book, index) => {
  console.log(`${index + 1}. ${book.title} (${book.author})`);
});
