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
it("Esta bien UT:", () => {
  expect(Calcular(20,3,6.65)).toEqual(63.99);
  }); 
it("Esta bien con descuento 1000:", () => {
  expect(Calcular(500, 2, 6.65)).toEqual(1034.51); // Redondeado a dos decimales
  });
  it("Esta bien con descuento 3000:", () => {
    expect(Calcular(1000, 3, 6.65)).toEqual(3039.53); // Redondeado a dos decimales
  });
  it("Esta bien con descuento 7000:", () => {
    expect(Calcular(1000, 7, 6.65)).toEqual(6942.91); // Redondeado a dos decimales
  });
  it("Esta bien con descuento 10000:", () => {
    expect(Calcular(1000, 10, 6.65)).toEqual(9598.50); // Redondeado a dos decimales
  });
});
