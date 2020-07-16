function pointCircle(x, y, r) {
  if (x <= r && y <= r) {
    console.log(
      "Точка с координатами: x= " + x + " и y= " + y + " принадлежит кругу"
    );
  } else if (x > r || y > r) {
    console.log("Точка лежит за пределами круга");
  }
}
pointCircle(4, 8, 6);
