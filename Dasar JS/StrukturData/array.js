// !Array
const isiTas = ['Buku', 'Pulpen', 20000, true];
console.log(isiTas[1]);
console.log(isiTas[-1]);

console.log(`Barang yang ada di tas sebanyak ${isiTas.length}`);

// *Push & Pop
isiTas.push('Jas Hujan', 'Bekal', 'Pengisi Daya');
isiTas.pop();
console.log(isiTas);

// *Shift & Unshift
isiTas.shift();
isiTas.unshift('Buku Baru');
console.log(isiTas);

// *Delete
delete isiTas[3];
console.log(isiTas);
isiTas.splice(1, 1);
console.log(isiTas);
