#!/usr/bin/env node

import commonLogic from '../src/index.js'
import { isEven, randomNum } from '../src/utility.js'

let conditionText = 'Answer "yes" if the number is even, otherwise answer "no".'

function questionFn() {
  return randomNum(100)
}

function correctAnswerFn(question) {
  return isEven(question) ? 'yes' : 'no'
}

commonLogic(conditionText, questionFn, correctAnswerFn)
