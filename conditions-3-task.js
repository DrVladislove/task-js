// TASK 3
function assignGrade(mark) {
  if (mark >= 1 && mark <= 20) {
    console.log("mark is 1");
  } else if (mark >= 21 && mark <= 40) {
    console.log("mark is 2");
  } else if (mark >= 41 && mark <= 60) {
    console.log("mark is 3");
  } else if (mark >= 61 && mark <= 80) {
    console.log("mark is 4");
  } else if (mark >= 81 && mark <= 100) {
    console.log("mark is 5");
  }
}

console.log(assignGrade(23));
console.log(assignGrade(82));
