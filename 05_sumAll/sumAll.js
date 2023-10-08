const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    if ( num1 < 0 || num2 < 0 ){
        return 'ERROR'
    }

    let smallest = num1;
    let largest = num2;
    let sum = 0;

    if (num1 > num2){
        smallest = num2;
        largest = num1;
    }

    while ( smallest <= largest){
        sum = sum + smallest;
        smallest += 1;
    }

    return sum;
    

};



// Do not edit below this line
module.exports = sumAll;
