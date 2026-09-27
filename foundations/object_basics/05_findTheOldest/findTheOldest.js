const findTheOldest = function (arr) {
  let currentYear = new Date().getFullYear();
  let ages = arr.map((item) => {
    if (item.yearOfDeath === undefined) {
      return currentYear - item.yearOfBirth;
    } else {
      return item.yearOfDeath - item.yearOfBirth;
    }
  });

  ages.sort((a, b) => b - a);
  let theOldestGuy = arr.filter((item) => {
    if (item.yearOfDeath === undefined && currentYear - item.yearOfBirth === ages[0]) {
      return true;
    } else if (item.yearOfDeath - item.yearOfBirth === ages[0]) {
      return true;
    } 
  })

  return theOldestGuy[0];
};

// Do not edit below this line
module.exports = findTheOldest;
