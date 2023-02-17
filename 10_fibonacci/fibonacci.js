const fibonacci = function(fiboNumber) {
    let fibo = [1, 1];
    if (fiboNumber >= 0) {
        for (let i = 2; i <= fiboNumber; i++) {
            fibo[i] = fibo[i - 2] + fibo[i - 1];
        }
        return fibo[fiboNumber - 1];
    } else {
        let errorMessage = "OOPS";
        return errorMessage;
    }
};

// Do not edit below this line
module.exports = fibonacci;
