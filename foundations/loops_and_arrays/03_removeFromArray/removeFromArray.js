const removeFromArray = function(arr, ...blackLists) {
  return arr.filter(item => !blackLists.includes(item));
}
// Do not edit below this line
module.exports = removeFromArray;
