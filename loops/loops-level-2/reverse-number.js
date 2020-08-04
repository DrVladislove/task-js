/*Сформировать из введенного числа обратное по порядку входящих в него цифр и вывести на экран. 
Например, если введено число 3486, то надо вывести число 6843.
 */

function reverseNumber(a) {
  var b = 0;
  for (; a; a = Math.floor(a / 10)) {
    b *= 10;
    b += a % 10;
  }
  console.log(b);
}

module.exports = {
  reverseNumber,
};
