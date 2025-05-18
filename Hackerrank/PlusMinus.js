/**
 * takes in a series of numbers, and after determining if they are zeros, positives, or negatives, returns the percentage of the array of numbers that are represented by zeros, positives, and negatives
 * @param {*} arr  - the series of numbers that are being run through the function, will be zeros, negatives, or positives
 * source for challenge: https://www.hackerrank.com/challenges/plus-minus/submissions/code/433081503
 */
function plusMinus(arr) {
  //initialize variables, total number of numbers in array, and then calculable variables for negatives, zeros, and positives
  const total = arr.length;
  let zeros = 0;
  let positives = 0;
  let negatives = 0;
  //cycles through string of numbers
  for (let i = 0; i < arr.length; i++) {
    //if numbers are zero, increase by one
    if (arr[i] == 0) {
      zeros++;
      //if numbers are positives, increase by one
    } else if (arr[i] > 0) {
      positives++;
      //if numbers are negative, increase by one
    } else if (arr[i] < 0) {
      negatives++;
    }
  }
  //initialzie percrentage variables
  let zerosPct;
  let negativesPct;
  let positivesPct;
  //calculate percentages of zeros, positives, and negatives
  zerosPct = zeros / total;
  negativesPct = negatives / total;
  positivesPct = positives / total;
  //log percentages
  console.log(positivesPct, negativesPct, zerosPct);
}
let nums = [0, 0, 15, -75, 15, 4, 23, 0, -12];
plusMinus(nums);
