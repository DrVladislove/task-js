/*3. Постановщик оценок
Напишите функцию assignGrade которая: принимает один аргумент, значение успеваемости от 1 до 100. и возвращает число от 1 до 5: 5, 4, 3, 2, или 1 которое соответствует оценке
*/
const operations = require("./operations-conditions-3.js");
const assert = require("assert");

describe("Постановщик оценок", function () {
  it("Правильно определяет оценку (4)", () => {
    assert.equal(operations.assignGrade(62), "mark is 4");
  });
  it("Правильно определяет оценку (5)", () => {
    assert.equal(operations.assignGrade(81), "mark is 5");
  });
  it("Правильно определяет оценку (3)", () => {
    assert.equal(operations.assignGrade(57), "mark is 3");
  });
  it("Правильно определяет оценку (2)", () => {
    assert.equal(operations.assignGrade(35), "mark is 2");
  });
  it("Правильно определяет оценку (1)", () => {
    assert.equal(operations.assignGrade(15), "mark is 1");
  });
});
