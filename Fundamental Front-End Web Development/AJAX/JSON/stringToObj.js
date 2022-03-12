const jsonString = `{
 "error": false,
 "message": "success",
 "books": [
   {
     "id": 1,
     "title": "Laskar Pelangi",
     "author": "Andrea Hirata"
   },
   {
     "id": 2,
     "title": "Filosofi Kopi",
     "author": "Dewi Lestari"
   },
   {
     "id": 3,
     "title": "Clean Code",
     "author": "Robert C Martin"
   }
 ]
}`;

const data = JSON.parse(jsonString);

data.books.forEach((book, index) => {
  console.log(`${index + 1}. ${book.title} (${book.author})`);
});
