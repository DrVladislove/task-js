function reverseNumber(a) {
  var b = 0;
  for (; a; a = Math.floor(a / 10)) {
    b *= 10;
    b += a % 10;
  }
  console.log(b);
}
reverseNumber(3486);
