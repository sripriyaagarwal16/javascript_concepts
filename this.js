"use strict";

let x = 10; // error

let user = {
  firstName: "Anshika",
  lastName: "Agarwal",
  hobbies: ["swimming", "dancing"],
  printFullName(hobby) {
    //console.log(this);
    console.log(hobby);
    return `${this.firstName} ${this.lastName}`;
  },

  showHobbies() {
    console.log(this.firstName);

    this.hobbies.forEach((hobby) => {
      console.log(this.firstName);
      console.log(hobby);
    });
  },
};

let printDetails = function (hobby) {
  console.log(this.printFullName() + "loves" + hobby);
};

const user2 = {
  firstName: "ankit",
  lastName: "gupta",
};

let user2details = user.printFullName.call(user2, "cooking");

console.log(user2details);

let details = printDetails.bind(user);

//details("cooking");

// call  // apply ==[]

//user.printFullName();

//user.showHobbies();

function understandingThis() {
  console.log(this); // global object
}

//console.log(this);

//understandingThis();

// let user = {
//   firstName: "Anshika",
//   lastName: "Agarwal",
//   getname() {
//     console.log(this);
//     console.log(this.firstName);
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// let user2 = {
//   firstName: "Anshul",
//   lastName: "Gupta",
// };

// user.getname.call(user2);

// user.getname();

// user.printDetails = function () {
//   console.log(this);
// };

// function abc() {
//   console.log(this);
// }

// const person = {
//   firstName: "Anshika",
//   lastName: "Agarwal",
//   hobbies: ["swimming", "cooking", "dancing"],

//   showHobbies() {
//     console.log(this.firstName);
//     this.hobbies.forEach((hobby) => {
//       console.log(this.firstName, hobby);
//     });
//   },
// };

// person.showHobbies();
