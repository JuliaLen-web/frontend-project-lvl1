import readlineSync from 'readline-sync'

export function greetings() {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
}
