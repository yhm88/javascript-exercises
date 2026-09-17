const removeFromArray = function(arr) {
    blacklists = Array.from(arguments).slice(1);
    return arr.filter(item => !blacklists.includes(item));
}
// Do not edit below this line
module.exports = removeFromArray;
