//Propiedades de los string
//Metodo slice
//El metodo slice extrae el texto de una cadena y devuelve una nueva cadena. Los cambios en el texto de una cadena no afectan a la otra cadena.
//slice extrae hasta, pero sin incluir finalTrozo. string.slice(1,4) extrae del segundo carácter hasta el cuarto carácter (caracteres con índice 1, 2 y 3).
let cadena = "Hola Mundo, ¿Que tal tu día?";
let resultado = cadena.slice(0,10)
alert(resultado)
//El resultado es Hola Mundo