var assert = require("assert");
function multiplicationTable() {
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      var result = i * j;
      return i + "*" + j + "=" + result;
    }
  }
}
module.exports = {
  multiplicationTable,
};
