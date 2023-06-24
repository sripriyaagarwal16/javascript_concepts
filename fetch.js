// const res = fetch("https://dummyjson.com/products");

// console.log("res", res);

// res.then(data => data.json());

// res.catch(err => console.log(err));

// pending
// fulfilled
// rejected

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

console.log("Started request…");

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();

  console.log("jsonPromise", jsonPromise);

  jsonPromise.then((data) => {
    console.log("data", data);
    console.log(data[1].name);
  });
});

// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//   );

//   fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0].name);
//     });
