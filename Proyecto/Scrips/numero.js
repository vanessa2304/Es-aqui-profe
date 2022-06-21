// Encontrar elementos de HTML con JS
const el_numero = document.getElementById("numero");
const el_resultado = document.getElementById("resultado");

// Agregar un evento al input
el_numero.addEventListener("change", function() {
  // Obetner el mensaje de resultado
  let resultado = comparar(el_numero.value);
  // Agregar el mensaje de resultado al elemento <p>
  el_resultado.innerHTML = resultado;
});

/* 
  Función que me dirá si un número es:
  Positivo, Negativo o Neutro
*/
function comparar(numero) {
  let mensaje = "El número " + numero + " es: ";
  if(numero > 0) {
    mensaje += "Positivo";
  } else if(numero < 0) {
    mensaje += "Negativo";
  } else {
    mensaje += "Neutro";
  }
  return mensaje;
}