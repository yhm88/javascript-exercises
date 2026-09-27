const palindromes = function (string) {
  const letterNum = "abcdefghijklmnopqrstuvwxyz0123456789"

  const cleanedString = string
  .toLowerCase()
  .split('')
  .filter((chara) => letterNum.includes(chara))
  .join('');

  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
