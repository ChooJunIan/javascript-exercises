const sumAll = function(num1, num2) {

  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  if (num1 < num2) {
    numStart = num1;
    numEnd = num2;
  }
  else {
    numStart = num2;
    numEnd = num1;
  }

  let sum = 0;
  while (numStart <= numEnd) {
    sum += numStart;
    numStart++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
