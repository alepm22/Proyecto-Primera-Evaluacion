import Calcular from "./Bisiesto.js";

describe("Calcular Total", () => {
  it("Esta bien CA:", () => {
    expect(Calcular(20, 3, 8.25).total_con_impuesto).toEqual(64.95);
  });
  it("Esta bien TX:", () => {
    expect(Calcular(20, 3, 6.25).total_con_impuesto).toEqual(63.75);
  });
  it("Esta bien AL:", () => {
    expect(Calcular(20, 3, 4).total_con_impuesto).toEqual(62.4);
  });
  it("Esta bien NV:", () => {
    expect(Calcular(20, 3, 8).total_con_impuesto).toEqual(64.8);
  });
  it("Esta bien UT:", () => {
    expect(Calcular(20, 3, 6.65).total_con_impuesto).toEqual(63.99);
  });
  it("Esta bien con descuento 1000:", () => {
    expect(Calcular(500, 2, 6.65).total_con_impuesto).toEqual(1034.51);
  });
  it("Esta bien con descuento 3000:", () => {
    expect(Calcular(1000, 3, 6.65).total_con_impuesto).toEqual(3039.53);
  });
  it("Esta bien con descuento 7000:", () => {
    expect(Calcular(1000, 7, 6.65).total_con_impuesto).toEqual(6942.91);
  });
  it("Esta bien con descuento 10000:", () => {
    expect(Calcular(1000, 10, 6.65).total_con_impuesto).toEqual(9598.50);
  });
  it("Esta bien con descuento 30000:", () => {
    expect(Calcular(1000, 30, 6.65).total_con_impuesto).toEqual(27195.75);
  });
});