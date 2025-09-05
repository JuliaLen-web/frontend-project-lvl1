#!/usr/bin/env node

import commonLogic from "../src/index.js";
import {progressionArray} from "../src/utility.js";

let conditionText = 'What number is missing in the progression?';

function questionFn() {
  let question = progressionArray();
  return question.join(' ');
}

function correctAnswerFn(question) {
  let arr = question.split(' ');
  let chooseIndex = arr.findIndex(el => el === '..') ;

  if (chooseIndex === 0 || chooseIndex === 1) {
    let step = arr[3] - arr[2];
    return (Number(arr[chooseIndex + 1]) - Number(step)).toString();
  } else {
    let step = arr[1] - arr[0];
    return (Number(arr[chooseIndex - 1]) + Number(step)).toString();
  }
}

commonLogic(conditionText, questionFn, correctAnswerFn);


