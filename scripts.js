   // Crear una instancia de PouchDB
   var db = new PouchDB('mi_base_de_datos');

   // Función para crear un párrafo y almacenarlo en PouchDB
   function crearParrafo() {
       var texto = document.getElementById('miTextarea').value;
       var nuevoParrafo = document.createElement('p');
       nuevoParrafo.innerText = texto;
       document.getElementById('contenedor').appendChild(nuevoParrafo);

       // Guardar el contenido en PouchDB
       var doc = {
           _id: new Date().toISOString(), // Usar la fecha y hora como ID único
           content: texto
       };

       db.put(doc).then(function(response) {
           console.log('Documento guardado en PouchDB', response);
       }).catch(function(err) {
           console.error('Error al guardar documento', err);
       });
   }

   // Función para cargar los párrafos almacenados al cargar la página
   function cargarParrafos() {
       db.allDocs({include_docs: true}).then(function(result) {
           result.rows.forEach(function(row) {
               var parrafo = document.createElement('p');
               parrafo.innerText = row.doc.content;
               document.getElementById('contenedor').appendChild(parrafo);
           });
       }).catch(function(err) {
           console.error('Error al cargar documentos', err);
       });
   }

   // Llamar a cargarParrafos al cargar la página
   window.onload = cargarParrafos;