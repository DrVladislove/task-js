const expect = require("expect");
var sinon = require("sinon");

function greaterNum(num1, num2) {
  if (num1 > num2) {
    console.log("Неверно");
  } else if (num1 < num2) {
    console.log("Наибольшее число между 5 и 10: 10");
  }
}

function helloWorld(lang) {
  switch (lang) {
    case "en":
      console.log("Hello");
    case "es":
      console.log("Hola");
    default:
      console.log("Привет");
  }
}
helloWorld();

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

describe("if/else/switch tasks", function () {
  describe("greaterNum", function () {
    describe("Возвращает результат", function () {
      it("10 когда мы передали 10 и 1", function () {
        expect(greaterNum(10, 1)).to.be.eq(10);
      });

      it("100 когда мы передали 57 и 100", function () {
        expect(greaterNum(57, 100)).to.be.eq(100);
      });

      it("100 когда мы передали 100 и 100 (равные значения)", function () {
        expect(greaterNum(100, 100)).to.be.eq(100);
      });

      it("-57 когда мы передали -57 и -100", function () {
        expect(greaterNum(-57, -100)).to.be.eq(-57);
      });
    });
  });

  describe("helloWorld", function () {
    describe("Возвращает результат", function () {
      expectedResults = {
        en: "Hello",
        es: "Hola",
        default: "Привет",
      };

      for (var lang in expectedResults) {
        (function (lang, result) {
          it(result + " когда мы передали " + lang, function () {
            console.log(result + " когда мы передали " + lang);
            expect(helloWorld(lang)).to.be.eq(result);
          });
        })(lang, expectedResults[lang]);
      }
    });
  });

  describe("assignGrade", function () {
    describe("Возвращает результат", function () {
      it("1 когда мы передали 10", function () {
        expect(assignGrade(10)).to.be.eq(1);
      });

      it("1 когда мы передали 20", function () {
        expect(assignGrade(20)).to.be.eq(1);
      });

      it("2 когда мы передали 25", function () {
        expect(assignGrade(25)).to.be.eq(2);
      });

      it("3 когда мы передали 45", function () {
        expect(assignGrade(45)).to.be.eq(3);
      });

      it("4 когда мы передали 63", function () {
        expect(assignGrade(63)).to.be.eq(4);
      });

      it("5 когда мы передали 100", function () {
        expect(assignGrade(100)).to.be.eq(5);
      });
    });

    describe("Сгенерированный тест на проверку всех возможных случаев", function () {
      it("возвращает корректные результаты", function () {
        var score, expected;
        for (var i = 0; i < 5; i++) {
          for (var j = 1; j <= 20; j += 7) {
            score = i * 20 + j;
            expected = i + 1;
            expect(assignGrade(score)).to.be.eq(expected);
          }
        }
      });
    });
  });
});
