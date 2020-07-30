/*3. Постановщик оценок
Напишите функцию assignGrade которая: принимает один аргумент, значение успеваемости от 1 до 100. и возвращает число от 1 до 5: 5, 4, 3, 2, или 1 которое соответствует оценке
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

module.exports = {
  assignGrade,
};
