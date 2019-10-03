module.exports = function multiply(first, second) {
  first_bigint = BigInt(first); // convert first number into BigInt type
  second_bigint = BigInt(second); // convert second number into BigInt type
  product = String(first_bigint * second_bigint); // multiply BigInt numbers and convert result into string
  return product;   
 }
 