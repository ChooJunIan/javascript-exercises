const reverseString = function(word) {
  let arr = word.split("");
  let reversedWord = '';
  console.log(arr.length - 1);
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedWord += arr[i];
  }

  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
