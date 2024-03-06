import bisiesto from "./Bisiesto.js";
const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const form = document.querySelector("#totalizador-form");
const resultadoDiv = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  const prec = Number.parseInt(precio.value);
  resultadoDiv.innerHTML = "<p>Cantidad:  " + cant + "</p>" + "<p> Precio:  "+ prec+"</p>";
});