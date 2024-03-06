import Calcular from "./Bisiesto.js";

describe("Calcular Total", () => {
  it("Esta bien si:", () => {
    expect(Calcular(20,3,8.25)).toEqual(64.95);
  });
});
