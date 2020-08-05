/*
Сложим все цифры какого-либо числа. 
Получим новое число, равное сумме всех цифр исходного числа. 
Продолжим этот процесс до тех пор, пока не получим однозначное число (цифру), называемое цифровым корнем данного числа. 
Например, цифровой корень числа 34697 равен 2 (3+4 + 6+9+7=29; 2+9=11; 1+1=2). 
Составить программу нахождения цифрового корня натурального числа.
*/

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

module.exports = {
  numeralRadical,
};
