function descargarArchivo() {
  
    var nuevoParrafo = document.createElement('p');
    var mayor = "<";
  var menor = ">";
  var incog = "!";
  var sl = "/"
      // Añadir texto al nuevo párrafo
      nuevoParrafo.textContent = mayor + sl + "html" + menor ;
      // Asignar un ID al nuevo párrafo
      nuevoParrafo.id = "miParrafo";
  
      // Agregar el nuevo párrafo al body del documento
      document.body.appendChild(nuevoParrafo);


      
      var duplicar = document.getElementById('miParrafo');
// Añadir texto al nuevo párrafo
duplicar.textContent = mayor + incog + "DOCTYPE html" + menor  ;
// Asignar un ID al nuevo párrafo
duplicar.id = "miParrafo";

// Agregar el nuevo párrafo al body del documento
document.body.appendChild(nuevoParrafo);


// Obtener todos los párrafos con el id "miParrafo"
var parrafos = document.querySelectorAll("#miParrafo");

// Concatenar el contenido de todos los párrafos
var contenido = "";
parrafos.forEach(function(parrafo) {
  contenido += parrafo.textContent + "\n";
});

// Crear un blob con el contenido
var blob = new Blob([contenido], { type: "text/plain" });

// Crear un enlace de descarga
var enlace = document.createElement("a");
enlace.href = URL.createObjectURL(blob);
enlace.download = "parrafos.html";

// Simular un clic en el enlace para iniciar la descarga
enlace.click();
}
