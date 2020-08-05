const operations = require("./numeral-radical.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("numeralRadical", function () {
  var spy;

  before(function () {
    spy = sinon.spy(console, "log");
  });

  after(function () {
    console.log.restore();
  });

  it("Shows finding numeral radical (9999) correctly", function () {
    operations.numeralRadical(9999);
    var i = 9999;
    expect(spy.calledWithExactly(i)).to.be.true;

    if (i < 10) {
      return i;
    }
    while (i) {
      var s = 0;
      expect(spy.calledWithExactly("before")).to.be.true;
      expect(spy.calledWithExactly("s:", s)).to.be.true;
      expect(spy.calledWithExactly("n:", i)).to.be.true;

      var digit = Math.floor(i % 10);
      s += digit;
      i = Math.floor(i / 10);

      while (i) {
        var digit = Math.floor(i % 10);
        s += digit;
        i = Math.floor(i / 10);
      }

      expect(spy.calledWithExactly("after")).to.be.true;
      expect(spy.calledWithExactly("s:", s)).to.be.true;
      expect(spy.calledWithExactly("n:", i)).to.be.true;

      if (s < 10) {
        return s;
      }

      while (s) {
        var digit = Math.floor(s % 10);

        i += digit;
        s = Math.floor(s / 10);
      }
    }

    expect(spy.calledWithExactly(s)).to.be.true;
    expect(spy.calledWithExactly(i)).to.be.true;
  });

  it("Shows finding numeral radical (123) correctly", function () {
    operations.numeralRadical(123);
    var i = 123;
    expect(spy.calledWithExactly(i)).to.be.true;

    if (i < 10) {
      return i;
    }
    while (i) {
      var s = 0;
      expect(spy.calledWithExactly("before")).to.be.true;
      expect(spy.calledWithExactly("s:", s)).to.be.true;
      expect(spy.calledWithExactly("n:", i)).to.be.true;

      var digit = Math.floor(i % 10);
      s += digit;
      i = Math.floor(i / 10);

      while (i) {
        var digit = Math.floor(i % 10);
        s += digit;
        i = Math.floor(i / 10);
      }

      expect(spy.calledWithExactly("after")).to.be.true;
      expect(spy.calledWithExactly("s:", s)).to.be.true;
      expect(spy.calledWithExactly("n:", i)).to.be.true;

      if (s < 10) {
        return s;
      }

      while (s) {
        var digit = Math.floor(s % 10);

        i += digit;
        s = Math.floor(s / 10);
      }
    }

    expect(spy.calledWithExactly(s)).to.be.true;
    expect(spy.calledWithExactly(i)).to.be.true;
  });
});
