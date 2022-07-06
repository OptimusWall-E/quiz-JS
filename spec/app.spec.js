
let spellCheck = require("../app");

describe("Function returns outputs as expected", () => {
  it("takes a word and outputs it", () => {
    expect(spellCheck("and")).toEqual("and");
  });

});
