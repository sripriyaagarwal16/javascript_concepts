console.log(a); // undefined

var a = 10;
var b = 20;

console.log(a); // 10

console.log(square(a));

function square(num) {
  return num * num;
}

var square1 = square(a);
var square2 = square(b);

console.log(square1);
console.log(square2);
