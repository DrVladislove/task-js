const operations = require("./operations-conditions-1.js");
const assert = require("assert");

it("Правильно определяет условие conditions-task-1", () => {
  assert.equal(operations.greaterNum(5, 10), 10);
});

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
