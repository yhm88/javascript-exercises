const findTheOldest = function (arr) {
  let age = arr.map((item) => {
    if (item.yearOfDeath === undefined) {
      return new Date().getFullYear() - item.yearOfBirth;
    } else {
      return item.yearOfDeath - item.yearOfBirth;
    }

  });
  age.sort((a, b) => b - a);
  let theOlddestItem = arr.filter((item) => {
    if (typeof item.yearOfDeath === "number") {
      return item.yearOfDeath - item.yearOfBirth === age[0]
    } else if (item.yearOfDeath === undefined && new Date().getFullYear() - item.yearOfBirth === age[0]) {
    return true;
    }
  });
  return theOlddestItem[0];
};

// Do not edit below this line
module.exports = findTheOldest;
