/* 5 Elaborar un algoritmo para leer la edad de 10 personas y mostrar 
cuantos son mayores de edad. */

const array = [ 17,40,5,3,2,70,24,21,35,11]
    let i = 0;
    array.forEach(value => {
        if (value>= 18){
            i++;
            
        }
        
});

document.write("Las personas mayores de edad son: " + i);