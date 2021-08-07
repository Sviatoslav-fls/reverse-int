module.exports = function reverse(n) {

  const numStr = Math.abs(n) + '';
  const result = numStr.split('').reverse().join('');
  return result
}
