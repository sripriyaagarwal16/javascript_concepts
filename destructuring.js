// Object destructuring

function abc({ lastName, firstName }) {
  console.log(firstName);
  console.log(lastName);
}

// function abc(obj) {
//   console.log(obj.firstName);
//   console.log(obj.lastName);
// }

var obj = {
  firstName: "Anshika",
  lastName: "Agarwal",
};

abc(obj);
