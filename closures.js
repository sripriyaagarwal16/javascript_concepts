// function a() {
//   c();
//   function c() {
//     console.log(b); // 10
//   }
// }
// const b = 10;
// a();

//  var x = 10;
//  console.log(x);

// function x() {
//   var a = 7;

//   function y() {
//     console.log(a); // 7
//   }
//   return y;
// }
// var z = x();

// console.log(z);
// z();

// function z() {
//   let b = 900;
//   function x() {
//     let a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// setTimeout

// function x() {
//   var i = 1;

//   console.log("Welcome to javascript before");

//   setTimeout(function () {
//     console.log(i);
//   }, 1000);

//   console.log("Welcome to javascript");
// }
// x();
