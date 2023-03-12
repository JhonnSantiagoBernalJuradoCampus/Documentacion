//Propiedades de los string
//Metodo match
//El match() método busca una cadena para un partido contra una expresión regular, y devuelve los partidos, como un objeto Array. Leer más acerca de las expresiones regulares en nuestro Tutorial RegExp y nuestra referencia RegExp objeto . Nota: Si la expresión regular no incluye el modificador g (to perform a global search) , el match() método devolverá sólo la primera coincidencia en la cadena. Este método devuelve un valor nulo si no se encuentra ninguna coincidencia.

let cadena = "Hola mundo. Campus es lo mejor del mundo:)";
let resultado = cadena.match(/mundo/g);
alert(resultado);

//El resultado es mundo,mundo

resultado = cadena.match(/mundo/);
alert(resultado);

//En este caso el rersultado es mundo ya que no pusimos la g (to perform a global search) por lo cual solo devuelve la primera vez que encuentra el dato en la cadena