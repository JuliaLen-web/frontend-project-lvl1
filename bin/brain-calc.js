#!/usr/bin/env node

import commonLogic from "../src/index.js";

let conditionText = 'What is the result of the expression?';

function randomNum(maxNum) {
  return Math.floor(Math.random() * maxNum);
}
function questionFn() {
  let arrExp = ['+', '-', '*'];
  let exp = arrExp[randomNum(arrExp.length)]
  return `${randomNum(100)} ${exp} ${randomNum(100)}`;
}
function correctAnswerFn(question) {
  let result = Function("return " + question)();
  return result.toString();
}

commonLogic(conditionText, questionFn, correctAnswerFn);

