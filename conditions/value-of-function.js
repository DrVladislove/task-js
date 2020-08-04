function valueOfFunction(x) {
  var option1 = 2 * x - 10,
    option2 = 0,
    option3 = 2 * Math.abs(x) - 1,
    result;
  if (x > 0) {
    console.log((result = option1));
  } else if (x == 0) {
    console.log((result = option2));
  } else if (x < 0) {
    console.log((result = option3));
  }
}
valueOfFunction(-2);
