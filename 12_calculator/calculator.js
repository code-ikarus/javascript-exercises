const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(numbers) {
	return numbers.reduce((acc, currentNumber) => acc + currentNumber, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((acc, currentNumber) => acc * currentNumber, 1)
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  if(num === 0 || num === 1){
    return 1;
  }
  if(num < 0){
    return "Factorial is not defined for negative numbers."
  }
  let result = 1;
  for(let i = num; i > 0; i--){
    result *= i;
  }
  return result
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
