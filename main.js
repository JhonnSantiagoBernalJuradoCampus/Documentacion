//Propiedades de los string
//Metodo replace
//El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.

let nombres = ["Miguel", "Santiago"];
let cadena = `Hola ${nombres[0]}, ¿Como vas?`;
alert(cadena);
let remplazar = cadena.replace(nombres[0], nombres[1]); 
alert(remplazar);