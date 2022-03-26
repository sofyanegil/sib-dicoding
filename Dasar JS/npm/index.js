import _ from 'lodash';
const myArray = [];
for (let i = 0; i < 11; i++) {
  myArray.push(i);
}
const sum = _.chunk(myArray, 2);
console.log(sum);
