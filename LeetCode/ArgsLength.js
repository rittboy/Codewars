/**
 * @param args - list of arguments passed to function
 * @return {number} - length of arguments, increments with each item
 */
var argumentsLength = function(...args) {
	//iterator for list of args
  let i = 0;
  //total count returns in function call
  count = 0;
  while(i < args.length){
    //with each item in list passed to function, increases the count
    count++;

    //increases iterator til end of list is reached
    i++;
  }

  return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
//Test Code for debugging purposes
console.log(argumentsLength(1,2,3,17,"Alpha"));