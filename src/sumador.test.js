import Calcular from "./Bisiesto.js";

describe("Calcular Total", () => {
  it("Esta bien CA:", () => {
    expect(Calcular(20,3,8.25)).toEqual(64.95);
  });
it("Esta bien TX:", () => {
  expect(Calcular(20,3,6.25)).toEqual(63.75);
  });
it("Esta bien AL:", () => {
  expect(Calcular(20,3,4)).toEqual(62.4);
  }); 
it("Esta bien NV:", () => {
  expect(Calcular(20,3,8)).toEqual(64.8);
  }); 
});
