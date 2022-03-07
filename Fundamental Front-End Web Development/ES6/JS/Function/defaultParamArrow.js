// !Default Parameters
// *= Merupakan default parameter
const sayHello = (name = "Stranger", greet = "Hello") => console.log(`${greet} ${name}!`);

// Mengirimkan parameter
sayHello("Egi", "Hai");
// Tidak mengirimkan parameter
sayHello();
