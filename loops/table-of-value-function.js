/*
Вывести таблицу значений функции y = -0.23x2 + x. 
Значения аргумента (x) задаются минимумом, максимумом и шагом. 
Например, если минимум задан как 1, максимум равен 3, а шаг 0.5. 
То надо вывести на экран изменение x от 1 до 3 с шагом 0.5 (1, 1.5, 2, 2.5, 3) и значения функции (y) при каждом значении x.
*/

function tableOfValue(x1, x2, up) {
  var y;
  for (; x1 <= x2; x1 += up) {
    y = -0.23 * Math.pow(x1, 2) + x1;
    console.log(y.toFixed(2));
  }
}

module.exports = {
  tableOfValue,
};
