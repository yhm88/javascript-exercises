const fibonacci = function(n) {
  let count
  if (typeof n !== "number") {
    count = parseInt(n);
  } else {
    count = n;
  }

  if (count === 0) return 0;
  if (count < 0) return "OOPS";

  let precede1 = 1;
  let precede2 = 0;

  for (let i = 2; i <= count; i++) {
    current = precede1 + precede2;
    precede2 = precede1;
    precede1 = current;    
  }
  return precede1;
};

// Do not edit below this line
module.exports = fibonacci;
