// !Try catch is used to handle errors in javascriptq
try {
  console.log('Awal blok try');
  errorCode;
  console.log('Akhir blok try');
} catch (error) {
  console.log('Terjadi error!');
  console.log(error.name);
  console.log(error.message);
  // console.log(error.stack);
} finally {
  console.log('Blok finally');
}
