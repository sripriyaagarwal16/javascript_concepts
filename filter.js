// filter ---> take out contents of array based on condition
// returns a new array

let a = [1, 2, 3, -4, 5, 6, 7, 8];

function isEven(val) {
  return val % 2 === 0;
}

function isOdd(val) {
  return val % 2 !== 0;
}

// print even numbers

const evenNumbers = a.filter(function (val) {
  return val % 2 === 0;
});

console.log(evenNumbers);

const negativNumbers = a.filter(function (val) {
  return val < 0;
});

console.log(negativNumbers);
