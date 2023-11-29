/**
 * This takes any given number,
 * and if the number is even, it will divide the number by two,
 * and if it is odd, it will multiply it by three and add one. 
 * This function exits once x becomes 1, and then returns how many steps it took 
 * to reduce down to 1
 */
function Rainfall(num){
    var steps = 1;
    while (num > 1){
        if (num % 2 === 0){
            num /= 2;
        }
        else if(num % 2 !== 0){
            num = (num*3) + 1;
        }
        steps++;
    }
    return steps;
}
// var num = 199;
var numSteps = Rainfall(num);
console.log("It took " + numSteps + " steps to reduce " + num + " to zero.");




