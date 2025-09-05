#!/usr/bin/env node

import readlineSync from 'readline-sync';

function game() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for(let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if((isEven(randomNumber) && answer === 'yes') || (answer === 'no' && !isEven(randomNumber))) {
      console.log('Correct!');
      if(i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber) ? 'yes' : 'no'}'`);
      return false;
    }
  }
}

function isEven(num) {
  return num % 2 === 0;
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
game();


