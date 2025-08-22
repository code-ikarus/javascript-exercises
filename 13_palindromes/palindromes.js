const palindromes = function (str) {
  const normalizedStr = str.toLowerCase().replace(/[\W_]/g, '')
  const reversedStr = normalizedStr.split('').reverse().join('')
  return normalizedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
