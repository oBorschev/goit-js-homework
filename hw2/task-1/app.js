"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Enter number");

  if (!Number.isNaN(Number(input))) {
    numbers.push(Number(input));
  } else {
    alert("It`s not a number. Try again");
  }

  console.log(numbers);
} while (input);

if (numbers !== null) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += Number(numbers[i]);
  }
  console.log(`Total sum numbers equals ${total}`);
}
