//Funciones
//Clausuras
// Clausura: Función incr()

const incr = (function () {
    let num = 0;
    return function () {
        num++;
        return num;
    };
})();

console.log(typeof(incr));
console.log(incr());
console.log(incr());
console.log(incr());