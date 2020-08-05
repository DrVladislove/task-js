// Вводятся десять натуральных чисел больше 2. Посчитать, сколько среди них простых чисел.
var nums = [];
var count = 10;

function generationNums() {
  while (nums.length < 10) {
    var randomizer = Math.ceil(Math.random() * 100);
    if (nums.indexOf(randomizer) === -1) {
      nums.push(randomizer);
    }
  }
  console.log(nums);
}

function quantityOfSimpleNum() {
  for (var i = 0; i < nums.length; i++) {
    nums.forEach(function (item) {
      for (var j = 2; j <= Math.sqrt(item) + 1; j++) {
        if (item % j == 0) {
          count -= 1;
          break;
        }
      }
    });
    console.log("Простых чисел: ", count);
    break;
  }
}
module.exports = {
  generationNums,
  quantityOfSimpleNum,
};
