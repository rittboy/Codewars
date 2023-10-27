/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

var argumentsLength = function(...args) {
	let i = 0;
  while(i < args.length){
    i++;
  }

  return i;
};
// let length = argumentsLength(1, 15, "Alpha", 27);
console.log(length);
/**
 * argumentsLength(1, 2, 3); // 3
 */