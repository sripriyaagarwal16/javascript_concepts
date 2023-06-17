// find returns first element that matches the condition

let a = [1, 2, 3, -4, 5];

const result = a.find(function (val) {
  return val < 0;
});

console.log(result);
