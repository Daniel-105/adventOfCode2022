const inputSample = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const rucksacks = inputSample.split("\n");
// console.log(rucksacks);

console.log(rucksacks.map((rucksack) => rucksack.split()));

// console.log(`half is: ${rucksacks.map((rucksack) => rucksack.length / 2)}`);

// let half = rucksacks[0].length / 2;
let half = rucksacks.map((rucksack) => rucksack.length / 2);

// let firstHalf = rucksacks[0].slice(0, half); // slice(0, 12)
// let secondHalf = rucksacks[0].slice(half);

// console.log(firstHalf);
// console.log(secondHalf);
let firstHalf = rucksacks.map((rucksack) => rucksack.slice(0, half));
let secondHalf = rucksacks.map((rucksack) => rucksack.slice(half));

// console.log(rucksacks.map((rucksack) => rucksack.slice(0, half)));
// console.log(rucksacks.map((rucksack) => rucksack.slice(half)));

console.log(firstHalf);
console.log(secondHalf);
