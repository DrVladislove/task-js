/*function sum(a) {
  var sum = 0;
  while (a > 0) {
    sum = Math.trunc(sum) + (a % 10);
    a = a / 10;
  }
  console.log("Сумма: " + sum);
}
sum(456);
*/

const { strict } = require("assert");

/*
function mul(b) {
  var mul = 1;
  while (b) {
    mul *= b % 10;
    b = Math.floor(b / 10);
  }
  console.log("Произведение: " + mul);
}
mul(456);



function sumMul(a) {
  var sum = 0,
    mul = 1;
  while (a > 0) {
    console.log(a);
    var digit = Math.trunc(a % 10);
    sum = sum + digit;
    mul *= digit;
    console.log("Сумма: " + sum);
    console.log("Произведение: " + mul);
    a = Math.trunc(a / 10);
  }
  console.log("Сумма: " + sum);
  console.log("Произведение: " + mul);
}
sumMul(456);
*/

("use strict");

function sumMul(num, act) {
  switch (act) {
    case "sum":
      return num
        .toString()
        .split("")
        .reduce(function (a, b) {
          return +a + +b;
        });
    case "mul":
      var mul = 1;
      num
        .toString()
        .split("")
        .forEach(function (el) {
          mul *= el;
        });
      console.log(mul);
  }
}
console.log(sumMul(456, "mul"));
