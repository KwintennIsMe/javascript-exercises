const convertToCelsius = function(fahrenheit) {
  let newCels = 0;
  newCels = (fahrenheit - 32) * 5 / 9;
  newCels = Math.round(newCels * 10) / 10;
  return newCels;
  //declare variable newCels
  //newCels = (fahrenheit - 32) * 5 / 9
  //round newCels to one decimal point
  //return newCels
};

const convertToFahrenheit = function(celsius) {
  let newFah = 0;
  newFah = (celsius * 9 / 5) + 32;
  newFah = Math.round(newFah * 10) / 10;
  return newFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
