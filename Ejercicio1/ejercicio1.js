/* 1. Leer un número entero y determinar si tiene 3 dígitos.*/

let numero = 100
let digitos = numero.toString().length;
    if(digitos == 3){
        document.write("numero ingresado tiene 3 digitos")
    }else{
        document.write("numero ingresado no tiene 3 digitos")
    }