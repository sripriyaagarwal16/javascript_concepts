// var a = 100;
// {
//   a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(a);

/** Behaviour in case of let & const */

// let b = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(b); // 20
// }
// console.log(b); //100

/** Functions */

// const c = 100;
// function x() {
//   const c = 10;
//   console.log(c); //10
// }
// x();
// console.log(c); //100

/** Illegal Shadowing */

//let a = 20;
// {
//   var a = 20;
// }
// console.log(a);

/** This is fine since var is function scoped */

//let a = 20;
// function x() {
//   var a = 20; // localscope
// }
//  console.log(a);
