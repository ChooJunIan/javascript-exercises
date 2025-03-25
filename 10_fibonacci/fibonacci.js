const fibonacci = function(num) {
  let intNum = parseInt(num); 
  if (intNum == 0) {
    return 0;
  }
  
  if (intNum < 0) {
    return "OOPS";
  }

  let firstPrev = 1;
  let secondPrev = 0; 

  for (let i = 2; i <= intNum ; i++) {
    currentNum = firstPrev + secondPrev
    secondPrev = firstPrev;
    firstPrev = currentNum;
  }

  return firstPrev;
  
};

// Do not edit below this line
module.exports = fibonacci;
