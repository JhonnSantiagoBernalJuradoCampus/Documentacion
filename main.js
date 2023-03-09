//Operadores logicos
//Operador OR lógico (||), uso expr1 || expr2, uso Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.
num1 = 15;
num2 = 17;
num3 = 23;
boleano = num2 > num1;
boleano2 = num2 > num3;
alert(boleano || boleano2);
//El resultado sera true ya almenos uno de las condiciones es true
