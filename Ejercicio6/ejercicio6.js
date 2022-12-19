/* 6 6.	Elaborar un algoritmo para leer las notas de 1 estudiantes.
Calcular el promedio de cada estudiante de la siguiente manera:
Nota 1 (20%)
Nota 2 (30%)
Nota 3 (50%)
 */

var nombreEstudiante = prompt("Ingrese el nombre del estudiante");

var nota1 = parseInt(prompt("Ingrese la nota 1"));
var nota2 = parseInt(prompt("Ingrese la nota 2"));
var nota3 = parseInt(prompt("Ingrese la nota 3"));

function calculoPromedio(nombre, not1, not2, not3) {
  if ((not1 >= 1 && not1 <= 10) || (not2 >= 1 && not2 <= 10) || (not3 >= 1 && not3 <= 10)) {
    var n1 = not1 * 0.2 ;
    var n2 = not2 * 0.3 ;
    var n3 = not3 * 0.5 ;
    var promedio = n1 + n2 + n3;

    document.write("El estudiante: " + nombreEstudiante + "\n" + " tiene un promedio de: " + "\n" + promedio);
   
    }
}

calculoPromedio(nombreEstudiante,nota1,nota2,nota3);

