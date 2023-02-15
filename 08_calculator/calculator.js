const add = function(firstNum, secondNum) {
  let result = firstNum + secondNum;
  return result;
};

const subtract = function(firstNum, secondNum) {
  let result = firstNum - secondNum;
  return result;
};

const sum = function(arrayForSum) {
  let sum = 0;
  for (let i = 0; i < arrayForSum.length; i++) {
    sum += arrayForSum[i];
  }
  return sum;
  //declare integer sum
  //for loop with i = 0, have i < arrayForSum length, have i increment one
    //have sum = sum + arrayForSum[i]
  //return sum
};

const multiply = function(arrayForResult) {
  let result = arrayForResult[0];
  for (let i = 1; i < arrayForResult.length; i++) {
    result *= arrayForResult[i];
  }
  return result;
};

const power = function(baseNum, power) {
  let result = baseNum ** power;
  return result;
};

const factorial = function(num) {
  let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
      console.log(result);
    }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
