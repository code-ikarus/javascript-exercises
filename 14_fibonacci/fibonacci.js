const fibonacci = function(n) {
  if (n === 0){
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n < 0){
    return "OOPS"
  }

  let sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber)
  }

  return sequence[n]
};

// Do not edit below this line
module.exports = fibonacci;
