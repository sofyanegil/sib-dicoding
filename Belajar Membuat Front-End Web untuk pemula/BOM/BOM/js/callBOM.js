// cara pertama
// window.alert("Hello World");

// cara kedua
// alert("Hello Bonjour");

// Function dengan nama yang sama dengan objek window maka akan dijalankan, bukan fungsi objek window yang dijalankan
function alert(nama) {
  console.log("Hati-hati, " + nama);
}

// Fungsi alert yang dibuat yang dijalankan
alert("Chewbacca");
// tulisan ‘Hati-hati, Chewbacca’ akan tercetak ke konsol browser

window.alert("Chewbacca");
// fungsi alert() yang ditulis di atas tetap terpanggil
