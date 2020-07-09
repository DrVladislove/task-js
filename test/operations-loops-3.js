var assert = require("assert");
function assignGrade(mark) {
  if (mark == 80) {
    return "Для i = 80 оценка 4";
  } else if (mark >= 81 && mark <= 100) {
    return "Для i=" + mark + " " + "оценка 5";
  }
}

function checkAssignGrade() {
  for (i = 85; i <= 100; i++) {
    return i;
  }
}

module.exports = {
  checkAssignGrade,
};
