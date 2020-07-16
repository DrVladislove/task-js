//Odd Number

function randomizer(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function oddNumber() {
  var a = randomizer(1, 1000000);
  if (a % 2) {
    console.log(a, "Нечетное");
  }
}

oddNumber();
