let number = Number(prompt("Masukan Angka"));
if (!number) {
  console.warn("Masukan Angka");
  console.error("Format yang anda input bukan Angka");
} else {
  console.info("Selamat Anda Memasukan Angka");
  console.log("Jangan Ceroboh");
}
