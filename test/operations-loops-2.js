/*2. Таблица умножения
Создайте цикл, который будет выполнятся от 1 до 10. Используйте вложенный цикл for, что бы показать таблицу для каждого множителя от 1 до 10 (всего 100 результатов). 
Решение оформите в виде функции multiplicationTable
*/

function multiplicationTable() {
  var resultString;
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      resultString = i + " * " + j + " = " + i * j;
    }
  }
}
multiplicationTable();
module.exports = {
  multiplicationTable,
};
