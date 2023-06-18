function sum(a, b) {
  // Function declaration
  return a + b;
}

var sum4 = (a, b) => a + b; // Function expression

const result = sum(2, 3);

console.log(result);

console.log(sum4(2, 3));

// function abc() {
//     console.log("anshika")
// }

//let sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

const isPositive = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

const randomNumber = () => Math.random;
