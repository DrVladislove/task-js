//Из двух случайных чисел, одно из которых четное, а другое нечетное, определить и вывести на экран нечетное число.

function randomizer(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function oddNumber() {
  var a = randomizer(1, 1000000),
    b = randomizer(1, 1000000);
  if (a % 2 || b % 2) {
    return "Нечетное";
  }
}

module.exports = {
  oddNumber,
};
