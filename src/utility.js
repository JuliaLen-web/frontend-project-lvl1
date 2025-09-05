export function randomNum(maxNum) {
  return Math.round(Math.random() * maxNum)
}

export function randomNumInRange(min, max) {
  let rand = min + Math.random() * (max - min)
  return Math.round(rand)
}

export function isEven(num) {
  return num % 2 === 0
}

export function greatestCommonDivisor(x, y) {
  let a = x
  let b = y
  if (b > a) return greatestCommonDivisor(b, a)
  if (!b) return a
  return greatestCommonDivisor(b, a % b)
}

export function progressionArray() {
  let resArray = []

  let minLength = 5
  let maxLength = 10
  let lengthArray = randomNumInRange(minLength, maxLength)

  let chooseIndex = randomNum(lengthArray - 1)

  let start = randomNum(100)
  let step = randomNum(10)

  for (let i= 0; i < lengthArray; i++) {
    let currentElement = start + i * step
    if (i !== chooseIndex) {
      resArray.push(currentElement)
    } else {
      resArray.push('..')
    }
  }

  return resArray
}

export function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return num !== 1
}
