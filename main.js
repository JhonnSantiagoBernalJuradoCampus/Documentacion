//Funciones
//Funciones Callbacks
//Las funciones Callbacks guardan una funcion anonima como parametro y el parametro es el que se ejecuta
// fB = Función B
const fB = function () {
    alert("Función B ejecutada.");
};

// fA = Función A
const fA = function (callback) {
callback();
};
(fA(fB)) 