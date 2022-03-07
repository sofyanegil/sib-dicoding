// !Keyword
function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

const programmer = new People("Sofyan", 20, ["Coding", "Read book", "Ping-pong"]);

console.log(programmer.name, programmer.age, ...programmer.hobby);

function Peoples(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}
// menambahkan introMyself ke People
Peoples.prototype.introMyself = function () {
  // this -> People
  setTimeout(() => {
    // this -> ??
    console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
    console.log(`Hobby saya adalah ${this.hobby}`);
  }, 300);
};

const programmers = new Peoples("Sofyan", 20, ["Coding", "Read book", "Ping-pong"]);
programmers.introMyself();
