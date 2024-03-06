function Calcular (precio,cantidad,TI) {
  const precio_neto= precio * cantidad;
  if(precio_neto>=1000){

    const newprecio_neto = precio_neto-(precio_neto * 0.03);
    const impuesto = newprecio_neto * (TI/100);
    const totalimpuesto = newprecio_neto + impuesto;
    return totalimpuesto;
  }
  const impuesto = precio_neto * (TI/100);
  const totalimpuesto = precio_neto + impuesto;
  return totalimpuesto;
}
export default Calcular;