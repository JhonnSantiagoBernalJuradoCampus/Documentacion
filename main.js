//Operadores Aritmeticos (libreria matematica)
//Metodo Math.random(), La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados. 
alert(Math.random())
//El resultado es un numero entre 0 y 1 float

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
alert(getRandomInt(3));
//De esta forma obtenemos un numero entre 0 y 2