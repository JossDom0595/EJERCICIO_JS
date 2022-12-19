/* 3 El costo de las llamadas telefónicas internacionales depende de la 
zona geográfica en la que se encuentre el país destino y del número de minutos 
hablados. En la siguiente tabla se presenta el costo del minuto por zona. A cada 
zona se le ha asociado una clave.

Nota: Para llamadas con duración menor a 30 minutos se hace descuento del 10%.
 */

let clave = 12
let minutos = 20
if (clave == 12 && minutos < 30 ){
 precio = 2.00
 total = precio * minutos
 precioTotal = total - (total * 0.10 )
 document.write("El costo de su llamada a america del norte es de: " + precioTotal )
    
}else if (clave ==  15 && minutos < 30 ){
    precio = 2.20
    total = precio * minutos
    precioTotal = total - (total * 0.10 )
    document.write("El costo de su llamada a america central es de: " + precioTotal )

    if(clave == 18 && minutos < 30 ){
        precio = 4.50.
        total = precio * minutos
        precioTotal = total - (total * 0.10 )
        document.write("El costo de su llamada a america del sur es de: " + precioTotal )
           
    }
       
} else if (clave == 19 && minutos < 30 ){
    precio = 3.50
    total = precio * minutos
    precioTotal = total - (total * 0.10 )
    document.write("El costo de su llamada a Europa es de:  " + precioTotal )
       
} else if (clave == 23 && minutos < 30 ){
    precio = 6.00
    total = precio * minutos
    precioTotal = total - (total * 0.10 )
    document.write("El costo de su llamada a asia es de: " + precioTotal )
       
}else if (clave == 25 && minutos < 30 ){
        precio = 6.00
        total = precio * minutos
        precioTotal = total - (total * 0.10 )
        document.write("El costo de su llamada a Africa es de: " + precioTotal )
           
}else if (clave == 29 && minutos < 30 ){
        precio = 5.00
        total = precio * minutos
        precioTotal = total - (total * 0.10 )
        document.write("El costo de su llamada a Oceania es de: " + precioTotal )
               
}else{
    precio =2.00
    total = precio * minutos
    document.write("El costo de su llamada no es valido el descuento y es de: " + total )


}