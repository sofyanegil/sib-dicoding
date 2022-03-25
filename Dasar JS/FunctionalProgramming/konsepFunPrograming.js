// !Konsep Functional Programing

// !1. Pure Function = functin yang tidak memiliki side effect
// *konsep pures function
// *1 output yang dihasilkan akan sama bila nilai parameter sama
// *2 hanya bergantung pada argumen yang diberikan
// *3 tidak memiliki efek samping
const hitungLuasLingkaran = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};
console.log(hitungLuasLingkaran(7)); //nilai akan tetap mengikuti input parameternya dan PI tidak akan berubah
// *Impure function = function yang memiliki side effect
let PI = 3.14;
const htgLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari);
};
console.log(htgLuasLingkaran(4)); // 50.24
PI = 5; // tidak sengaja nilai PI berubah
console.log(htgLuasLingkaran(4)); // nilai berubah karena adanya perubahan pada PI

//*Side effect = adanya perubahan pada nilai dari variabel yang tidak diinginkan
// fungsi untuk membuat object baru dari object person dan menambahkan properti age
const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};
const person = {
  name: 'Bobo',
};
// object baru memiliki properti age tetepai object person lama ikut berubah = side effect
const newPerson = createPersonWithAge(18, person);
console.log({
  person,
  newPerson,
});
//no side effect
const person2 = {
  name: 'Bobo',
};
const createPersonWithAge2 = (age, person) => {
  // dengan destucture object person2
  return { ...person, age };
};
const newPerson2 = createPersonWithAge2(18, person2);
console.log({
  person2,
  newPerson2,
});

// !2. Immutability = tidak bisa mengubah nilai dari variable yang sudah dideklarasikan
// *Lakukan perubahan pada object baru jangan object yang sudah ada
const user = {
  firstname: 'Harry',
  lastName: 'Protter', // ups, typo!
};
const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};
const newUser = createUserWithNewLastName('Potter', user);
console.log(newUser);

// !3. Rekursif = function yang memanggil dirinya sendiri
// *reskursif bisa mengganti fungsi iterasi
const countDown = (start) => {
  console.log(start);
  if (start > 0) {
    countDown(start - 1);
  }
};
countDown(10);

// !4. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen;mengembalikan sebuah fungsi; atau bahkan keduanya.
// *Function hello
const hello = () => {
  console.log('Hello!');
};

// *Function say yang memiliki parameter function lain dan memanggil function tersebut
const say = (someFunction) => {
  someFunction();
};
// *Function say Hello yang mereturn functionlain didalamnya, gabungan dari hello dan say
const sayHello = () => {
  return () => {
    console.log('Hello!');
  };
};

hello();
say(hello);
sayHello()();

// *Higher-Order Function ex
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  };

  return loopTrough(arr, action);
};

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
  names,
  newNames,
});
