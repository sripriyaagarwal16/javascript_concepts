let a = [1, 2, 3, 4, 5];

// print square of each element of array
// map --- > transform the contents of array
// always returns a new array
a = a.map(function (num) {
  return num * num;
});

// a = a.map((num) => num * num);

console.log(a);
//console.log(squaredArray);
