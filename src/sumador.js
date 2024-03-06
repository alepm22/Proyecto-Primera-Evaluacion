function Calcular (precio,cantidad,TI) {
  const precio_neto= precio * cantidad;
  const impuesto = precio_neto * (TI/100);
  return precio_neto + impuesto;
}
export default Calcular;