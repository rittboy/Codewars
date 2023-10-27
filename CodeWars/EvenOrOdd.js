/**Solve for a given integer being even or odd.
 * Will take any given integer, and when divided by 2, if it returns no remainder, will declare the integer as an Even Number, and if 
 * is found to have a remainder, will return it is an odd number.
 *Link for Challenge:  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript
 */

let number = 57;
function evenOrOdd(number){
    if(number % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}
// console.log("The number " + number + " Is " + evenOrOdd(number));