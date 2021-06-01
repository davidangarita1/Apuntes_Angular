// Podemos almacenar un conjunto de elementos del mismo tipo mediante vectores o arreglos:
let vector1: number[] = [1, 4, 2];
vector1.push(33);
for(let elemento1 of vector1)
console.log(elemento1);

// Indicamos luego del tipo de dato los corchetes abiertos y cerrados:
let vector2: number[]

// Si queremos definir e inicializar algunas componentes del arreglo luego la sintaxis es:
let vector3: number[] = [1, 4, 2];

// El compilador de TypeScript nos podrá avisar del error si queremos agregar componentes que no sean de tipo 'number':
// vector3.push('juan'); //error

// Otra sintaxis para definir un arreglo en TypeScript es mediante genéricos utilizando la clase Array:
let vector4: Array<number> = [1, 4, 2];
vector4.push(33);
for(let elemento2 of vector4)
console.log(elemento2);