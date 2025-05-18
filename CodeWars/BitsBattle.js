/**
 * @param  numbers takes in a series of numbers, some odds and some evens, and converts them to binary and then compares total count of ones in the binary format, and determines whether odds have higher numbers of ones than evens and returns the winning result, including a tie if they have the same number
 * @returns the winning result, evens win if there's more ones in evens, odds win if vice versa, and returns a tie if neither has more
 * https://www.codewars.com/kata/58856a06760b85c4e6000055
 */
function bitsBattle(numbers) {
  //filters out non anytning not ones or zeros
  const number = numbers.filter(Boolean);
  //converts number to boolean, and then checks for ones in resulting number and returns count of ones in odd numbers
  const odds = number
    .filter((e) => e % 2)
    .reduce((a, c) => a + (c.toString(2).match(/1/g) || []).length, 0);
  //converts number to boolean, and then checks for ones in resulting boolean string and if number is even returns count to evens variable
  const evens = number
    .filter((e) => e % 2 == 0)
    .reduce((a, c) => a + (c.toString(2).match(/0/g) || []).length, 0);
  //checks to see which variable has higher count, and returns results of said check
  return odds > evens ? "odds win" : evens > odds ? "evens win" : "tie";
}
const test = [5, 78, 19, 48, 13, 12];

let result = bitsBattle(test);

console.log(test, result);
