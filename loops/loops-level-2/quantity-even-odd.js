/*
function quantityEvenOdd(a) {
  var even = 0,
    odd = 0;
  while (a > 0) {
    if (a % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
    a = a / 10;
    console.log("Четных: " + even + " Нечетных: " + odd);
    break;
  }
}
quantityEvenOdd(22);
*/

function quantityEvenOdd(a) {
  var even = 0,
    odd = 0;
  while (a > 0) {
    if (a % 2 == 0) {
      even++;
      console.log(even);
    } else {
      odd++;
    }
    a = Math.trunc(a / 10);
    console.log(a);
  }

  console.log("Четных: " + even + " Нечетных: " + odd);
}
quantityEvenOdd(56709);
