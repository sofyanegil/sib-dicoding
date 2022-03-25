// !Kuis Error Handling
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

const validateNumberInput = (a, b, c) => {
  if (typeof a !== 'number') throw new ValidationError('Argumen pertama harus number');
  if (typeof b !== 'number') throw new ValidationError('Argumen kedua harus number');
  if (typeof c !== 'number') throw new ValidationError('Argumen ketiga harus number');
};

const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);
    if (a === b && b === c) return 'Segitiga sama sisi';
    if (a === b || a === c || b === c) return 'Segitiga sama kaki';
    else return 'Segitiga sembarang';
  } catch (error) {
    return error.message;
  }
};
const triangle = detectTriangle(2, 3, 2);
console.log(triangle);
