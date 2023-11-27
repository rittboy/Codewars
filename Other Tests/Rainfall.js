/**
 * This takes any given number,
 * and if the number is even, it will divide the number by two,
 * and if it is odd, it will multiply it by three and add one. 
 * This function exits once x becomes 1, and then returns how many steps it took 
 * to reduce down to 1
 */
function Rainfall(x){
    var steps = 0;
    while (x > 1){
        if (x % 2 === 0){
            x /= 2;
        }
        else if(x % 2 !== 0){
            x = (x*3) + 1;
        }
        steps++;
    }
    return steps;
}

var numSteps = Rainfall(x);

console.log("It took " + numSteps + " steps to reduce " + x + " to zero.");