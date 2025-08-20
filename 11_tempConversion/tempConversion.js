const convertToCelsius = function(fahrenheit) {
  let converted = ((fahrenheit - 32) * 5) / 9;
  return Math.round(converted * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let converted = ((celsius * 9)/ 5) + 32;
  return Math.round(converted * 10) / 10
};
console.log(convertToCelsius(68))
console.log(convertToFahrenheit(20))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
