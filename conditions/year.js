function year(a) {
  if (a % 4 != 0) {
    console.log(" Невисокосный");
  } else if (a % 100 == 0) {
    console.log(" Невисокосный");
  } else if (a % 400 == 0) {
    console.log(" Высокосный");
  } else {
    console.log("Высокосный");
  }
}
year(1995);
