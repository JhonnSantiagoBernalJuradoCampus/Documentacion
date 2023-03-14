//Objetos
//Metodo Object.fromEntries
//Object.fromEntries() El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
//  Respuesta esperada: Object { foo: "bar", baz: 42 }