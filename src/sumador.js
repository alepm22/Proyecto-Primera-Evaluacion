function Calcular(precio, cantidad, TI) {
  const precio_neto = precio * cantidad;
  let descuento = 0;
  if (precio_neto >= 1000 && precio_neto<3000) {
    descuento = precio_neto * 0.03;
  }
  else if(precio_neto >= 3000 && precio_neto<7000){
    descuento = precio_neto * 0.05;
  }
  else if(precio_neto >= 7000 && precio_neto<10000 ){
    descuento = precio_neto * 0.07;
  }
  else if(precio_neto >= 10000 && precio_neto<30000 ){
    descuento = precio_neto * 0.1;
  }
else if(precio_neto >= 30000){
  descuento = precio_neto * 0.15;
  }
  const precio_neto_con_descuento = precio_neto - descuento;
  const impuesto = precio_neto_con_descuento * (TI / 100);
  const total_con_impuesto = precio_neto_con_descuento + impuesto;

  return parseFloat(total_con_impuesto.toFixed(2));
}
export default Calcular;