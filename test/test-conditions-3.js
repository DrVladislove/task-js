/*3. Постановщик оценок
Напишите функцию assignGrade которая: принимает один аргумент, значение успеваемости от 1 до 100. и возвращает число от 1 до 5: 5, 4, 3, 2, или 1 которое соответствует оценке
*/
const operations = require("./operations-conditions-3.js");
const assert = require("assert");
it("Правильно определяет оценки conditions-task-3", () => {
  assert.equal(operations.assignGrade(62, 75), "mark is 4");
});
