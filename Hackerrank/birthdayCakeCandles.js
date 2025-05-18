/**
 *chld can only blow out talles candles on their birthday cake, determine how many are the tallest
 * @param {*} candles - list of candles on cake, defined by how tall they are
 * @returns counter - the number of candles at the maximum height in the list
 * Source for challenge: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */
function birthdayCakeCandles(candles) {
  //returns tallest candle height
  const maxCount = Math.max(...candles);
  //keeps track of how many candles are at max height
  let counter = 0;
  //iterates through array and increases counter at each at maximum height
  for (let i = 0; i < candles.length; i++) {
    if (maxCount === candles[i]) counter++;
  }
  //returns final number at tallest height
  return counter;
}
let candles = [2, 5, 5, 3, 1, 3, 4, 2];
birthdayCakeCandles(candles);
