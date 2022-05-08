const sum = (fromN, toN) => {
  // Sum all the values from fromN up to toN
  if (fromN >= toN) return fromN;
  return fromN + sum(++fromN, toN);
};

module.exports = sum;
