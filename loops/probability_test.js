const operations = require("./probability.js");
var sinon = require("sinon");
var expect = require("chai").expect;

describe("probability", () => {
  before(function () {
    sinon.stub(Math, "random").returns(0.55);
  });

  after(function () {
    Math.random.restore();
  });

  describe("probability of even in %", function () {
    it("Returns result in %", function () {
      var result = operations.probability(0, 1000);
      expect(result).to.be.eq("100 %");
    });
  });

  describe("probability of odd in %", function () {
    it("Returns result in %", function () {
      var result = operations.probability(0, 998);
      expect(result).to.be.eq("0 %");
    });
  });
});
