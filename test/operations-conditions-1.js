var assert = require("assert");
function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
}

module.exports = {
  greaterNum,
};
