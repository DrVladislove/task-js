/*1. Генератор четных - нечетных чисел
Создайте цикл, который будет случайным образом генерировать 5 чисел от 0 до 20.
 Для каждого случая будет проверятся текущее число (четное или нечетное), и выводится результат на экран (например, 2 - четное).
 Решение оформите в виде функции numberGenerator()
 */
function randomizer(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
function numberGenerator() {
  for (var i = 0; i < 5; i++) {
    var a = randomizer(1, 20);
    if (a % 2 == 0) {
      console.log(a + " четное");
    } else {
      console.log(a + " нечетное");
    }
  }
}

module.exports = {
  numberGenerator,
};
