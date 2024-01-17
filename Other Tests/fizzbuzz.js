function fizzBuzz(start, end){
    let result = [];

    for(let i = start; i <= end; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz");
        }else if(i % 3 === 0){
            result.push("Fizz");
        }else if(i % 5 === 0){
            result.push("Buzz");
        }else{
            result.push(i.toString());
        }
    }

    return result;

}

console.log('FIZZBUZZ EXAMPLE OUTPUT:\n\n');
const fizzBuzzResults = fizzBuzz(1, 200);

console.log('Results: ' + '[' + fizzBuzzResults + ']');