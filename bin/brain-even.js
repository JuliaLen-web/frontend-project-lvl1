#!/usr/bin/env node

import commonLogic from "../src/index.js";

let conditionText = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  return num % 2 === 0;
}
function questionFn() {
  return Math.floor(Math.random() * 100);
}
function correctAnswerFn(question) {
  return isEven(question) ? 'yes' : 'no';
}

commonLogic(conditionText, questionFn, correctAnswerFn);

