"use strict";
// El tipo de dato enum permite hacer nuestro código más legible:
var Operation;
(function (Operation) {
    Operation[Operation["Suma"] = 0] = "Suma";
    Operation[Operation["Resta"] = 1] = "Resta";
    Operation[Operation["Multiplicacion"] = 2] = "Multiplicacion";
    Operation[Operation["Division"] = 3] = "Division";
})(Operation || (Operation = {}));
;
var calculadora = [
    Operation.Suma,
    Operation.Resta,
    Operation.Multiplicacion,
    Operation.Division
];
for (var i = 0; i < calculadora.length; i++) {
    var actual = calculadora[i];
    switch (actual) {
        case calculadora[0]: {
            console.log('Operación actual: Suma ');
            break;
        }
        case calculadora[1]: {
            console.log('Operación actual: Resta ');
            break;
        }
        case calculadora[2]: {
            console.log('Operación actual: Multiplicacion ');
            break;
        }
        case calculadora[3]: {
            console.log('Operación actual: Division ');
            break;
        }
    }
}
