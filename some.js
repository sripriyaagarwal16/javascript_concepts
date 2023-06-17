// some ---> if one or more elements of the array is satisfying condition , it returns true , else it returns false

const transactions = [1000, 2000, 400, 800, 7000];

// whether any bank amount is in negative

const result = transactions.some(function (amount) {
  return amount < 0;
});

console.log(result);
