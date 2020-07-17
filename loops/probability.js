function randomizer(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function probability() {
  var a = 0;
  for (let i = 0; i < 1000; i++) {
    if ((randomizer(0, 999) % 100) % 2 == 0) {
      a += 1;
    }
    console.log((a / 1000) * 100 + " %");
  }
}
probability();
