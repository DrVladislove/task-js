function quantityOfSimpleNum() {
  var nums = [];
  while (nums.length < 10) {
    var randomizer = Math.ceil(Math.random() * 100);
    if (nums.indexOf(randomizer) === -1) {
      nums.push(randomizer);
    }
  }
  console.log(nums);
  var count = 10;

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
quantityOfSimpleNum();