/* 8 Elabore un algoritmo con un menú simple con las cuatro operaciones básicas: 
sumar, restar, multiplicar, dividir. */

let num1 = parseFloat(prompt("Ingrese el primer numero"));
let num2 = parseFloat(prompt("Ingrese el segundo numero"));

let opcion = parseInt(prompt("Elige una opcion \n 1. Suma\n 2. Resta\n 3. Multiplicación\n 4. División"))


function calculoAritmetico( a , b , opc){
    
    switch (opc) {
        case 1: 
            var sumar = a + b;
            document.write("El resultado de la suma es = " + sumar);
          break;
        case 2:
            var restar = a - b;
            document.write("El resultado de la resta es " + restar);
          break;
        
        case 3:
            var multiplicar = a + b;
            document.write("El resultado de la multiplicación es " + multiplicar);
          break;

          case 4:
            var dividir = a / b;
            document.write("El resultado de la division es " + dividir)
            break;
        default:
            document.write("Escoja un opción valida");
          break;
      }

    
    
    
    
   }
   calculoAritmetico(num1 , num2 , opcion)