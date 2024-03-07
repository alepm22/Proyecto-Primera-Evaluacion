function Calcular(precio, cantidad, TI) {
  const precio_neto = precio * cantidad;
  const descuentos = [
    { rango: [1000, 3000], descuento: 0.03 },
    { rango: [3000, 7000], descuento: 0.05 },
    { rango: [7000, 10000], descuento: 0.07 },
    { rango: [10000, 30000], descuento: 0.1 },
    { rango: [30000, Infinity], descuento: 0.15 },
  ];
  let descuento = 0;
  for (const item of descuentos) {
    const [min, max] = item.rango;
    if (precio_neto >= min && precio_neto < max) {
      descuento = precio_neto * item.descuento;
      break; 
    }
  }
  const precio_neto_con_descuento = precio_neto - descuento;
  const impuesto = precio_neto_con_descuento * (TI / 100);
  const total_con_impuesto = precio_neto_con_descuento + impuesto;
  
  return {
    total_con_impuesto: parseFloat(total_con_impuesto.toFixed(2)),
    descuento: parseFloat(descuento.toFixed(2)),
  };
}

export default Calcular;