function transfer(b) {
  var a = 1;
  switch (a) {
    case 1:
      if (b * 1024) {
        console.log(b * 1024 + "байт");
      }
    case 2:
      if (b / 1024) {
        console.log(b / 1024 + " килобайт");
      }
  }
}

transfer(512);
