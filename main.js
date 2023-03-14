//Funciones
//Funciones aninomas
//Estructura = const nombre = function () {}


const saludo = function () {
    return "Hola";
};


alert(saludo);  // ƒ () { return 'Hola'; }
alert(saludo());  // 'Hola'
console.log(typeof(saludo));