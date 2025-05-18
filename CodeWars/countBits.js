/**
 *converts a number to binary and then counts the ones represented in binary string and returns the total count
 * @param  r - a nubmer to be convertdd to binary
 * @returns - the total number of ones in binary string returned after converting
 */
var countbits = function (r) {
  let bin = r.toString(2);
  let count = 0;

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] == 1) {
      count++;
    }
  }
  console.log(r, bin, count);
  return count;
};

let r = 12345897;

let result = countbits(r);
