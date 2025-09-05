#!/usr/bin/env node

import commonLogic from "../src/index.js";
import {randomNum} from "../src/utility.js";

let conditionText = 'What is the result of the expression?';

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

