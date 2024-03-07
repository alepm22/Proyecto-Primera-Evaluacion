import Calcular from "./Bisiesto.js";

const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const estadoSelect = document.querySelector("#estado--select");
const form = document.querySelector("#totalizador-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  const prec = Number.parseInt(precio.value);
  const estado = estadoSelect.value;
  const resultado = Calcular(cant, prec, parseFloat(estado));

  let resultadoHTML = "<p> Tasa de impuesto: " + estado + "%</p>";

  const precio_neto = cant * prec;
  resultadoHTML += "<p>Precio Neto: $" + precio_neto + "</p>";

  const descuento = resultado.descuento;
  resultadoHTML += "<p>Descuento: $" + descuento + "</p>";

  const total_con_impuesto = resultado.total_con_impuesto;
  resultadoHTML += "<p>Precio Total: $" + total_con_impuesto + "</p>";

  resultadoDiv.innerHTML = resultadoHTML;
});
