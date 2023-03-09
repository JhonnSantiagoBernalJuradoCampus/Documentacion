//Operadores Aritmeticos (libreria matematica)
//Propiedad Math.PI La propiedad Math.PI representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159.
//La siguiente función utiliza Math.PI para calcular la longitud de la circunferencia de un circulo mediante el radio del circulo proporcionado como parametro.
function calculaCircunferencia(radio) {
    resultado = 2 * Math.PI * radio;
    alert(resultado)
  }
calculaCircunferencia(1);
//El resultado es 6.283185307179586
