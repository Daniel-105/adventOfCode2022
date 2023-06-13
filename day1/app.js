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
let strArray1 = sampleCode.split("\n\n");

// taking the first group as an example
let sampleGroup = strArray1[0];

for (let i = 0; i < strArray1.length; i++) {
  strArray1[i];
}

const getSumOfGroup = (group) => {
  const numbList = group
    // Spliting the group by the \n
    // Still keeping the numbers as strings
    .split("\n")

    // turning each string into number
    .map((number) => Number(number))

    // Calculating the sum of the group
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  return numbList;
};

console.log(strArray1);
console.log(getSumOfGroup(sampleGroup));

// Slicing the array to see the first elf
// let firstElf = strArray1.slice(0, strArray1.indexOf(""));

// let numbersArray = strArray1.map((number) => Number(number));

// Turning the array of strings into an array of numbers
// let firstElfNumbers = firstElf.map((number) => Number(number));

// Calculating the sum o values
// let sumOfCalories = firstElfNumbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(numbersArray);
// console.log(firstElf);

// O que é que eu quero fazer agora?
// Somar os numeros.
