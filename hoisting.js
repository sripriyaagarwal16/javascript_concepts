// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// let x = 10;
// console.log(x);
//const x = 10; // temporal dead zone

// getName();
// console.log(x);
// console.log(getName());
// function getName() {
//   console.log("javascript");
// }

//getName();
// console.log(getName);
// var getName = function () {
//   // Functiom Expression
//   console.log("javascript");
// };

// console.log(x);

// var x = function abc() {
//   console.log("javascript");
// };

// console.log(x());

// console.log(z);

// var z = function xyz() {
//   console.log("anshika");
// };

// z();

abc();

//z();

// Function declaration // function hoisting
function abc() {
  console.log("abc");
}

// Function expression  // variable hoisting
var z = function abc() {
  console.log("xyz");
};

z();
