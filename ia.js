

var a = 'a';
var b = 'b';
var c = 'c';
var d = 'd';
var e = 'e';
var f = 'f';
var g = 'g';
var h = 'h';
var i = 'i';
var j = 'j';
var k = 'j';
var l = 'l';
var m = 'm';
var n = 'n';
var ñ = 'ñ';
var o = 'o';
var p = 'p';
var q = 'q';
var r = 'r';
var s = 's';
var t = 't';
var u = 'u';
var v = 'v';
var w = 'w';
var x = 'x';
var y = 'y';
var z = 'z';
var clave = "ola";
var hola = "como";
var estas = "est"
var bien = "bie"




var espacio = ""
var sumando_1 = " ";
var sumando_2 = " ";
sumando_1 = sumando_1 + sumando_2;



function editText(){
    var texto = document.getElementById("textear").value;

    var parrafo = document.createElement("ul");
    sumando_2 = texto;
    sumando_1 =  sumando_2;
    parrafo.innerHTML = (sumando_1);
    
    


     if(texto.includes(clave)){
        var nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = sumando_2;

    var contenedor = document.getElementById("contenedor"); 
contenedor.appendChild(nuevoParrafo); 

        parrafo.textContent = "hola, como estas hoy?, soy tu inteligencia artificial  disponible para ayudarte con cualquier cuestión de la empresa, en que puedo ayudarte hoy?";
       }











       if(texto.includes("que")                                                                                                 || texto.includes("todo bie")|| texto.includes("como and")|| texto.includes("como te va")|| texto.includes("como te fue")|| texto.includes("como va")){
           if(texto.includes("onda")){
        
     
     
        var nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = sumando_2;

    var contenedor = document.getElementById("contenedor"); 
contenedor.appendChild(nuevoParrafo); 

        parrafo.textContent = "Hola, hoy me ha sido un dia exelente, como esta tu día?" }
    


        
    
        if(texto.includes("llego")){
        
            if(texto.includes("llego")){
                if(texto.includes("llego")){
     
            var nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML = sumando_2;
    
        var contenedor = document.getElementById("contenedor"); 
    contenedor.appendChild(nuevoParrafo); 
    
            parrafo.textContent = "Asi mira" }
                }}
                
    
    
    
    
    
    }















    var contenedor = document.getElementById("contenedor"); 
contenedor.appendChild(parrafo); 

}
   





/*
function crearOraciones() {
var nuevoParrafo = document.createElement("p");

var contenido = "Esta es la primera oración.<br>Esta es la segunda oración.";

nuevoParrafo.innerHTML = contenido;


*/