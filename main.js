//Propiedades de los string
//Metodo matchAll
//El método matchAll()devuelve un iterador de todos los resultados que coinciden con una cadena contra una expresión regular,incluyendo los grupos de captura.
let cadena = "Hola Mundo Mundo Mundo Mundo Mundo Mundo";
let resultado = [...cadena.matchAll(/Mundo/g)];
alert(resultado)