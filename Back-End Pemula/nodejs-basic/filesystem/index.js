const fs = require('fs');
const path = require('path');
const location = path.resolve(__dirname, 'notes.txt');
const data = fs.readFileSync(location, 'utf8');
console.log(data);
