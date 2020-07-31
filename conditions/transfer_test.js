const operations = require("./transfer.js");
const assert = require("assert");

describe("transfer", () => {
  it("Правильно переводит число в байты", () => {
    assert.equal(operations.transfer("2", 512), 0.5 + " килобайт");
  });

  it("Правильно переводит число в килобайты", () => {
    assert.equal(operations.transfer("1", 512), 524288 + " байт");
  });
});

524288;
