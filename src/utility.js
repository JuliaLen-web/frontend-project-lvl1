export function randomNum(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

export function isEven(num) {
  return num % 2 === 0;
}

export function greatestCommonDivisor(x, y) {
  if (y > x) return greatestCommonDivisor(y, x);
  if (!y) return x;
  return greatestCommonDivisor(y, x % y);
}
