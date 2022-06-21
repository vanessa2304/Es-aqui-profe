// Definición de variables
const mayor_edad = 18;
const tercera_edad = 75;
const descuento_menor = 0.8;
const descuento_tercera = 0.5;
const cantidad_mayoreo = 5;
const descuento_mayoreo = 0.9;

const el_edad = document.getElementById("edad");
const el_cantidad = document.getElementById("cantidad");
const el_calcular = document.querySelector("div#contenido-principal button");
const el_precio = document.querySelector("p span");

el_calcular.addEventListener("click", calcular);
el_edad.addEventListener("change", calcular);
el_cantidad.addEventListener("change", calcular);

function calcular() {
  // Obtener el valor de cantidad y edad
  let precio = 500;
  let edad = el_edad.value;
  let cantidad = el_cantidad.value;
  
  // Preguntar si el usuario es menor de edad o de la tercera edad
  if(edad < mayor_edad) { // Aplicar descuento a menores de edad
    precio *= descuento_menor;
  } else if(edad >= tercera_edad) { // Aplicar descuento a personas de la tercera edad
    precio *= descuento_tercera;
  }

  // Obtener el total
  let total = precio * cantidad;

  // Aplicar descuento de mayoreo
  if(cantidad >= cantidad_mayoreo) {
    total *= descuento_mayoreo;
  }
  
  // Mostrar el precio del boleto
  el_precio.innerHTML = total;
}