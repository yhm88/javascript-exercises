const removeFromArray = function(arr, ...valueRemove) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!valueRemove.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// Do not edit below this line
module.exports = removeFromArray;
