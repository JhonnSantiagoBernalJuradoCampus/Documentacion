//Objetos
//Metodo Object.fromEntries
//El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).

let array = ["Dato #0","Dato #1","Dato #2","Dato #3"];
console.log(Object.entries(array))

//Este metodo lo que hace es devolver una matriz con su llave o indice y su valor