/* 7 Elaborar un algoritmo para leer la nota de diez estudiantes y mostrar cantidad
 de aprobados y reprobados. */

const array = [ 9,10,8,7,3,5,6,7,9,10]
  let i = 0;
  let j = 0;
  array.forEach(value => {
    if (value>= 5){
        i++;
          
    }else if(value < 5){
       j++;
    }
      
});
  document.write("La cantidad de alumnos aprobados es = " + i);
  document.write("La camtidad de alumnos reprobados es = " + j);