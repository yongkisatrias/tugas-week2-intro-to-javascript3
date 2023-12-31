// Program 1: Using Promises to Calculate number
const addNumbers = (a, b) => new Promise((resolve, reject) => {
  if (typeof a !== "number" || typeof b !== "number") {
    reject(new Error("Input harus berupa angka"));
  } else {
    const result = a + b;
    resolve(result);
  }
});

addNumbers(5, 10)
  .then((result) => {
    console.log(`Hasil penjumlahan: ${result}`);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Output : Hasil penjumlahan: 15

// Program 2: Using Promises to counting the Number of Odd Numbers in an Array
const countOddNumbers = (numbers) => new Promise((resolve, reject) => {
  if (!Array.isArray(numbers)) {
    reject(new Error("Input harus berupa array"));
  } else {
    const oddNumbers = numbers.filter((num) => num % 2 !== 0);
    resolve(oddNumbers.length);
  }
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

countOddNumbers(numbers)
  .then((result) => {
    console.log(`Jumlah bilangan ganjil dalam array: ${result}`);
  })
  .catch((error) => {
    console.log(error.message);
  });
// Output : Jumlah bilangan ganjil dalam array: 5
