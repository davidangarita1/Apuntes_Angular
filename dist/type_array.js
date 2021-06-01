"use strict";
// Podemos almacenar un conjunto de elementos del mismo tipo mediante vectores o arreglos:
var vector1 = [1, 4, 2];
vector1.push(33);
for (var _i = 0, vector1_1 = vector1; _i < vector1_1.length; _i++) {
    var elemento1 = vector1_1[_i];
    console.log(elemento1);
}
// Indicamos luego del tipo de dato los corchetes abiertos y cerrados:
var vector2;
// Si queremos definir e inicializar algunas componentes del arreglo luego la sintaxis es:
var vector3 = [1, 4, 2];
// El compilador de TypeScript nos podrá avisar del error si queremos agregar componentes que no sean de tipo 'number':
// vector3.push('juan'); //error
// Otra sintaxis para definir un arreglo en TypeScript es mediante genéricos utilizando la clase Array:
var vector4 = [1, 4, 2];
vector4.push(33);
for (var _a = 0, vector4_1 = vector4; _a < vector4_1.length; _a++) {
    var elemento2 = vector4_1[_a];
    console.log(elemento2);
}
