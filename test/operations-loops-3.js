/* 3. Оценка результатов
Cоздайте функцию checkAssignGrade:
Проверьте результаты функции assignGrade из условных упражнений для каждого значения от 80 до 100.
То есть создайте цикл for от 80 до 100 и вызывайте в нем вашу функцию, например assignGrade(81)
*/

function assignGrade(mark) {
  if (mark >= 1 && mark <= 20) {
    return "mark is 1";
  } else if (mark >= 21 && mark <= 40) {
    return "mark is 2";
  } else if (mark >= 41 && mark <= 60) {
    return "mark is 3";
  } else if (mark >= 61 && mark <= 80) {
    return "mark is 4";
  } else if (mark >= 81 && mark <= 100) {
    return "mark is 5";
  }
}

function checkAssignGrade() {
  for (i = 80; i <= 100; i++) {
    console.log(assignGrade(81));
    return i;
  }
}
checkAssignGrade();
module.exports = {
  checkAssignGrade,
};
