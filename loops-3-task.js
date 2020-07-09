// TASK 3
function assignGrade(mark) {
  if (mark == 80) {
    console.log("Для i = 80 оценка 4");
  } else if (mark >= 81 && mark <= 100) {
    console.log("Для i=" + mark + " " + "оценка 5");
  }
}

function checkAssignGrade() {
  for (i = 85; i <= 100; i++) {
    assignGrade(90);
    return i;
  }
}
checkAssignGrade();
