// const numbers = [1, 2, 3, 4, 5];

// const numbers2 = [6, 7, 8, 9, 10];

// const result = [...numbers, ...numbers2];

// console.log(result);

function sum(a, b = 3) {
  return a + b;
}

const result = sum(2, 6);

console.log(result);
