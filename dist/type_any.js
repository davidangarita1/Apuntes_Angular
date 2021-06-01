"use strict";
/*
En las situaciones que debemos almacenar un dato en una variable y no sabemos de antemano que tipo se trata, TypeScript incorpora el tipo 'any'.

Es un tipo de dato que debemos evitarlo en lo posible ya que el compilador no nos puede ayudar y debemos esperar a ejecutar el programa para identificar errores.

Cuando utilizamos librerías heredadas de JavaScript es muy posible que nos veamos obligados a utilizar este tipo de dato.
*/
var dato;
dato = 10;
console.log(dato);
dato = 'Hola';
console.log(dato);
dato = true;
console.log(dato);
dato = [1, 2, 3];
console.log(dato);
// Podemos definir un Array con elementos de distinto tipo:
var vec = [10, 'Inicio', true];
