function numeralRadical(n) {
  console.log(n);

  if (n < 10) {
    return n;
  }
  while (n) {
    var s = 0;
    console.log("before");
    console.log("s:", s);
    console.log("n:", n);

    var digit = Math.floor(n % 10);
    s += digit;
    n = Math.floor(n / 10);

    while (n) {
      var digit = Math.floor(n % 10);
      s += digit;
      n = Math.floor(n / 10);
    }

    console.log("after");
    console.log("s:", s);
    console.log("n:", n);

    if (s < 10) {
      return s;
    }

    while (s) {
      var digit = Math.floor(s % 10);

      n += digit;
      s = Math.floor(s / 10);
    }
  }

  console.log(s);
  console.log(n);
}
numeralRadical(34697);
