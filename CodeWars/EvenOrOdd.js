/**
 * Takes a number, and based upon the remainder given by the modulus operator, returns
 * if the number is even or odd
 * @param {*} number variable given to operate on
 * @returns "odd" or "even" depending upon result of modulus operator
 */
const number = 27;
function evenOrOdd(number){
    //if the  remainder is nothing, returns even
    if(number % 2 === 0){
        return "Even";
    }else{
        //if a remainder is returned, returns odd
        return "Odd";
    }
}

//test code to check function
console.log("The number " + number + " Is " + evenOrOdd(number));