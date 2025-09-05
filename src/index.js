#!/usr/bin/env node

import readlineSync from 'readline-sync'

function game(conditionText, questionFn, correctAnswerFn, name) {
  console.log(conditionText)
  for (let i = 0; i < 3; i++) {
    let question = questionFn()
    let correctAnswer = correctAnswerFn(question)

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (correctAnswer === answer) {
      console.log('Correct!')
      if (i === 2) {
        console.log(`Congratulations, ${name}!`)
      }
    }
    else {
      console.log(`'${answer}' is wrong answer  (. Correct answer was '${correctAnswer}'`)
      console.log(`Let's try again, ${name}!`)
      return false
    }
  }
}

export default function commonLogic(conditionText, questionFn, correctAnswerFn) {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  game(conditionText, questionFn, correctAnswerFn, name)
}
