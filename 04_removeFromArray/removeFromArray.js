const removeFromArray = function(arr, ...nums) {
  let num = 0;
  for (let i = arr.length; i >= 0; i--){
    if (nums.includes(arr[i])) {
      arr.splice(i, 1)
    }
  }
  
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
