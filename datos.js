

   function actualizarTexto(){


    // Crear un nuevo elemento p
    var parrafo = document.createElement("p");

    // Crear un nodo de texto con el contenido deseado
    var contenido = document.createTextNode("Este es un nuevo párrafo creado con JavaScript.");

    // Añadir el nodo de texto al elemento p
    parrafo.appendChild(contenido);

    // Añadir el elemento p al contenedor en el DOM
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(parrafo);

    }