//Funciones
//Funcion como objeto
//Estructura = new Function(p1, p2..., code);
const saludar = new Function("return 'Hola';");

saludar(); // 'Hola'

alert(saludar());
console.log(typeof(saludar));