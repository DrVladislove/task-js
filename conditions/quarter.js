/*
Определить четверть координатной плоскости, которой принадлежит точка. 
Координаты точки ввести с клавиатуры.
*/

function quarter(x, y) {
  if (x >= 1 && y >= 1) {
    return "Точки x и y принадлежат первой четверти координатной плоскости";
  } else if (x <= -1 && y >= 1) {
    return "Точки x и y принадлежат второй четверти координатной плоскости";
  } else if (x <= -1 && y <= -1) {
    return "Точки x и y принадлежат третьей четверти координатной плоскости";
  } else if (x >= 1 && y <= -1) {
    return "Точки x и y принадлежат четвертой четверти координатной плоскости";
  } else if (x == 0 && y == 0) {
    return "Точки лежат в начале координат";
  }
}
quarter(0, 0);

module.exports = {
  quarter,
};
