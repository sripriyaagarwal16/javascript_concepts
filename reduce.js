// reduce -- iterate through contents of your array and return one single output

let a = [1, 2, 3, 4, 5];

var sum = 0;

for (var i = 0; i < a.length; i++) {
  sum = sum + a[i];
}

console.log(sum);

const result = a.reduce(function (sum, curr) {
  // 0 + 1 = 1 , 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15
  return sum + curr;
});

const mul = a.reduce(function (mul, curr) {
  return mul * curr;
});

console.log(result);
console.log(mul);
