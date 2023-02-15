const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (num1 < num2 && (num1 > 0 && num2 > 0) && (typeof num1 === 'number' && typeof num2 === 'number')) {
        for (let i = num1; i <= num2; i++) {
            finalSum += i;
        }
        return finalSum;
    } else if (num2 < num1 && (num1 > 0 && num2 > 0) && (typeof num1 === 'number' && typeof num2 === 'number')) {
        for (let i = num1; i >= num2; i--) {
            finalSum += i;
        }
        return finalSum;
    } else {
        let errorMessage = "ERROR";
        return errorMessage;
    }
}

// Do not edit below this line
module.exports = sumAll;
