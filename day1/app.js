const sampleCode = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

// Spliting the initial string into an array with multiple strings
let strArray1 = sampleCode.split("\n");

// Slicing the array to see the first elf
let firstElf = strArray1.slice(0, strArray1.indexOf(""));

// let numbersArray = strArray1.map((number) => Number(number));

// Turning the array of strings into an array of numbers
let firstElfNumbers = firstElf.map((number) => Number(number));

// Calculating the sum o values
let sumOfCalories = firstElfNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

// console.log(numbersArray);
// console.log(firstElf);
console.log(firstElfNumbers);
console.log(sumOfCalories);
console.log(strArray1);

// O que é que eu quero fazer agora?
// Somar os numeros.
