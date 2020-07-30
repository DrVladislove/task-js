/* 3. Оценка результатов
Cоздайте функцию checkAssignGrade:
Проверьте результаты функции assignGrade из условных упражнений для каждого значения от 80 до 100.
То есть создайте цикл for от 80 до 100 и вызывайте в нем вашу функцию, например assignGrade(81)
*/

var assignFunction = require("./operations-conditions-3.js");

function checkAssignGrade() {
  var a = assignFunction.assignGrade(81);
  for (i = 80; i <= 100; i++) {
    return a;
  }
}

module.exports = {
  checkAssignGrade,
};
