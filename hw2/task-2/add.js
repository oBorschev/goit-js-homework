"use strict";

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
let input;

do {
  input = prompt("Enter password");
  if (passwords.includes(input)) {
    alert("Welcome");
    break;
  } else if (!passwords.includes(input)) {
    attemptsLeft -= 1;
    if (attemptsLeft == 0) {
      alert("Your attempts have ended, your account has been blocked!");
      break;
    }
    alert(`Incorrect password! You have ${attemptsLeft} attemps`);
    continue;
  }
} while (input);
