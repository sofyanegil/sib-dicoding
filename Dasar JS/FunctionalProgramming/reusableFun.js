// !Reusable Functions adalah sebuah function yang bisa digunakan oleh beberapa file javascript

// *Array Map adalah sebuah function yang bisa digunakan untuk mengubah isi array menjadi array baru
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name}!`);
console.log(newArray);

// *Array Filter adalah sebuah function yang bisa digunakan untuk mengambil isi array yang sesuai dengan kondisi
const students = [
  { name: 'Harry', score: 60 },
  { name: 'James', score: 88 },
  { name: 'Ron', score: 90 },
  { name: 'Bethy', score: 75 },
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents);

// *Array Reduce adalah sebuah function yang bisa digunakan untuk menjumlahkan isi array
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);

// *Array Some adalah sebuah function yang bisa digunakan untuk mengecek apakah ada isi array yang sesuai dengan kondisi
const isThereAnyStudent = students.some((student) => student.score > 85);
console.log(isThereAnyStudent);

// *Array Find adalah sebuah function yang bisa digunakan untuk mencari isi array yang sesuai dengan kondisi
const findStudent = students.find((student) => student.score > 85);
console.log(findStudent);

// *Array Sort adalah sebuah function yang bisa digunakan untuk mengurutkan isi array
const compareScore = (a, b) => {
  return a.score - b.score;
};
const sortedStudents = students.sort(compareScore);
console.log(sortedStudents);

// *Array Every adalah sebuah function yang bisa digunakan untuk mengecek apakah semua isi array sesuai dengan kondisi
const isAllStudentsPassed = students.every((student) => student.score >= 60);
console.log(isAllStudentsPassed);
// *Array forEach adalah sebuah function yang bisa digunakan untuk mengakses isi array
const forEachStudents = students.forEach(({ name }) => console.log(`Hello, ${name}!`));
