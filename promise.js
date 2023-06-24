let success = true;
const promiseObject = new Promise(function (onFulFilled, onRejected) {
  if (success) {
    onFulFilled("Javascript Promise");
  } else {
    onRejected("Error in Promise");
  }
});

promiseObject
  .then((res) => console.log("Response", res))
  .catch((err) => console.log("Error", err));

//console.log("Promise Object", promiseObject);
