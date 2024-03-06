import bisiesto from "./Bisiesto.js";
const cantidad = document.querySelector("#cantidad-input");
const form = document.querySelector("#totalizador-form");
const resultadoDiv = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);
  resultadoDiv.innerHTML = "<p>" + cant + "</p>";
});