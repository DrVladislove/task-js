function triangle(a, b, c) {
  if (a + b > c || a + c > b || b + c > a) {
    console.log("Треугольник существует");
  } else {
    console.log("три отрезка не образуют треугольник");
  }
  if (a != b && a != c && b != c) {
    console.log(
      "Треугольник является разносторонним, так как его стороны не равны между собой"
    );
  } else if (a == b && b == c) {
    console.log(
      "Треугольник является равносторонним, так как всего его стороны равны"
    );
  } else if (a == b || b == c) {
    console.log(
      "Треугольник является равнобедренным, так как две его стороны равны"
    );
  }
}

triangle(2, 3, 5);

/*
switch (a, b, c) {
    case "versatile":
      a > b && a < c && 
}
*/
