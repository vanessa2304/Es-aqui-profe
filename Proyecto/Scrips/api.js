const contenedor = document.getElementById("contenido-principal");
const url = "https://raw.githubusercontent.com/MarioMarinDev/Grupo-1-API/master/base_datos.json";
const uri = "https://raw.githubusercontent.com/MarioMarinDev/Grupo-1-API/master/";

fetch(url).then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  console.log(datos);
  for(let i = 0; i < datos.length; i++) {
    contenedor.innerHTML += "<div class='poster'><img src='" + uri + datos[i]["imagen"] + "'><h3>" + datos[i]["nombre"] + "</h3></div>";
  }
}).catch(function(error) {
  console.log(error);
});