module.exports = function reverse (n) {
  const num = n.toString().split('').reverse().join('');
  return parseFloat(num);
};
