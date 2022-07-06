
let placeholder = require("../app");

describe("Function returns outputs as expected", () => {
  it("takes a word and outputs it", () => {
    expect(placeholder("and")).toEqual("and");
  });

});
