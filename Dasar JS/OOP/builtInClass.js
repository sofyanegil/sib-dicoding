// !Built in Class is a built in class that is created by the javascript engine.
const myAge = (birthday) => {
  const birtday = new Date(birthday);
  const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
  const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
  const diffDate = new Date(diff_ms); // mengubah nilai miliseconds menjadi date
  return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
};

console.log(myAge('2001-07-05'));
const listOfContent = [1, 2, 'President', {}];
console.log(Array.isArray(listOfContent));
// result is true

const splitText = '12:20:00'.split(':');
// result is [ '12', '20', '00' ]
