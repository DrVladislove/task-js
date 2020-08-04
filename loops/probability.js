//Проверить корректность работы генератора псевдослучайных чисел языка программирования с помощью оценки вероятности выпадения четных чисел на выборке не меньше 1000 случайных чисел.

function randomizer(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function probability(min, max) {
  var a = 0;
  for (let i = min; i < max; i++) {
    if ((randomizer(min, max) % 100) % 2 == 0) {
      a += 1;
    }
  }
  return Math.floor((a / 1000) * 100) + " %";
}

module.exports = {
  probability,
};
