const removeFromArray = function(array, ...args) {
  return array.filter(element => {
    return !args.includes(element)
  })
};
console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
