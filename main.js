//Propiedades de los string
//Metodo localeCompare
//El metodo compara dos cadenas en la configuración regional actual, devuelve en un criterio entre -1 y 1 (-1 para before 0 para equal y 1 para after)
let cadena = "abcd";
let cadena2 = "efgh";
let criterio = cadena.localeCompare(cadena2);
alert(criterio)
//El resultado es -1 ya que va antes