//Propiedades de los string
//Metodo .chartAt
//El metodo .chartAt devuelve el caracter de la cadena en el indice que se indica


let cadena = "Hola mundo";
let indice = cadena.charAt(0)
alert(indice)
//El resultado es H ya que esta en la posicion 0 de la cadena


let cantidad = cadena.length
let indice2 = cadena.charAt(--cantidad)
alert(indice2)
//En este caso el resultado sera el ultimo caracter de la cadena de texto ya que primero pido la cantidad de datos en la cadena y despues le resto 1 que vendria siendo la ultima posicion de la cadena de texto