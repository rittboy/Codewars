/**
 * This function takes an array of values, and adds each value to a total value of sum. Returns the sum of
 * all the values.
 * @param ar array of values operated on
 * @returns sum - final addition of all numbers in array 
 */
const ar = [23, 17, 45, 97, 126];
console.log(ar);
function simpleArraySum(ar){
    //total value of all values in array
    let sum = 0;
    //iterator going through array, also represents each value in sum
    let i = 0;
    //iterates through each value in array, adds them together into one single variable
    while(i < ar.length){
        sum += ar[i];
        i++;
    }
    return sum;
}
const sum = simpleArraySum(ar);
console.log(sum);