const palindromes = function (sentence) {
  let splitArr = sentence.split('').filter((char) => {
    return /[a-zA-Z0-9]/.test(char);
  }).map(word => word.toLowerCase());

  let splitArrOri = splitArr.slice().join("");
  let rejoined = splitArr.reverse().join("");
  console.log(splitArrOri);

  return splitArrOri === rejoined;
};

// Do not edit below this line
module.exports = palindromes;
