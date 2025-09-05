#!/usr/bin/env node

import commonLogic from "../src/index.js"
import { randomNum } from "../src/utility.js"
import { greatestCommonDivisor } from "../src/utility.js"

let conditionText = 'Find the greatest common divisor of given numbers.'

function questionFn() {
  return `${randomNum(100)} ${randomNum(100)}`
}
function correctAnswerFn(question) {
  let arr = question.split(' ')
  let res = greatestCommonDivisor(arr[0], arr[1])
  return res.toString()
}

commonLogic(conditionText, questionFn, correctAnswerFn)


