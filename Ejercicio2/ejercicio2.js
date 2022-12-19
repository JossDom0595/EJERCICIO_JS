/* 2 En un cierto país el impuesto que se debe pagar por artículos
importados se calcula mediante las siguientes reglas:*/

let precio = 1000
if (precio >= 20.01 && precio <= 40.00){
    precio_total=precio+(precio*0.30)
    document.write("pago total con impuesto es  " + precio_total)   
}else if (precio >= 40.01 && precio <= 500.00){
    precio_total=precio+(precio*0.40)
    document.write("pago total con impuesto es  " + precio_total)   
}else if (precio >= 500.01){
    precio_total=precio+(precio*0.50)
    document.write("pago total con impuesto es  " + precio_total) 

}else{ 
document.write("su gasto no genera impuestos")

}