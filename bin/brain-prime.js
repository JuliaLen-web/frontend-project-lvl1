#!/usr/bin/env node

import commonLogic from '../src/index.js'
import { isPrime, randomNum } from '../src/utility.js'

let conditionText = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function questionFn() {
  return randomNum(100)
}
function correctAnswerFn(question) {
  return isPrime(question) ? 'yes' : 'no'
}

commonLogic(conditionText, questionFn, correctAnswerFn)
