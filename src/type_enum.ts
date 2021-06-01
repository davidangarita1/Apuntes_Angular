// El tipo de dato enum permite hacer nuestro código más legible:
enum Operation {
    Suma,
    Resta,
    Multiplicacion,
    Division
};

let calculadora = [
    Operation.Suma,
    Operation.Resta,
    Operation.Multiplicacion,
    Operation.Division
]


for (let i = 0; i < calculadora.length; i++) {
    let actual = calculadora[i]
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



