//TASK 1
function randomizer(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function numberGenerator() {
  for (var i = 0; i < 5; i++) {
    var a = randomizer(1, 20);
    if (a % 2 == 0) {
      console.log(a, "Четное");
    } else if (a % 2) {
      console.log(a, "Нечетное");
    }
  }
}

numberGenerator();
