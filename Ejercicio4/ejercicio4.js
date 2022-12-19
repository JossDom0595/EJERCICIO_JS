/* 4 Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del 
número ingresado por el usuario. */

numeroTabla = parseInt(prompt("Ingrese el numero que desee ver la tabla de multiplicar:"));

document.write("Tabla del : " + numeroTabla + "<br>");

function tablaMultiplicar(num){
    var tabla;
    for(let i=1 ; i<=10 ; i++){ 
        tabla=num*i
        document.write("<br>" + num +" x " + i +" = "+ tabla);
        
    }
    
}
    
tablaMultiplicar(numeroTabla)