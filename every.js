// every ---> whether every element inside array is passing the condition

const transactions = [1000, 2000, -400, 800, 7000];

const result = transactions.every(function (amount) {
  return amount < 0;
});

console.log(result);
