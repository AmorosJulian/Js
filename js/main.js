/*function saludar() {
    console.log("Hola");
}

function despedir() {
    console.log("chau");
}

saludar();

function saludo(){
    saludar();
    despedir();
}

saludo();

function sumar (valor1, valor2, valor3) {
    let resultado = valor1 + valor2 + valor3;
    alert("El resultado es " + resultado);
}

sumar(parseInt(prompt("Ingresa el primer numero a sumar")), parseInt(prompt("Ingresa el segundo numero a sumar")), parseInt(prompt("ingresa el terer numero a sumar")));*/

// function nombreCompleto() {
//     let nombre = prompt("Ingresa tu nombre");
//     let apellido = prompt("Ingresa tu apellido");
//     return "Tu nombre completo es " + nombre + " " + apellido;
// }

// alert(nombreCompleto())

// function calculadora (valor1, valor2, operacion) {
//     switch(operacion) {
//         case "+":
//             return valor1 + valor2;
//             break;
//         case "-":
//             return valor1 - valor2;
//             break;
//         case "*":
//             return valor1 * valor2;
//             break;
//         case "/":
//             return valor1 / valor2;
//             break;
//         default:
//             return "Verifica los datos ingresados y vuelve a intentar"
//             break;                     
//     }
// }

// let operacion = calculadora(parseInt(prompt("Ingrese el primer valor")), parseInt(prompt("Ingrese el segundo valor")), prompt("Ingrese "+" para sumar, "-" para restar, "*" para multiplicar, "/" para dividir"))
// alert("El resultado de la operacion es " + operacion)
// console.log("El resultado es " + operacion)

// const mensaje = (texto) => { alert(texto) };
// mensaje("Hola");

alert("SIMULADOR DE PRESTAMOS");
const interes = (x) => { return x * 0.30 };
let dineroSolicitado = parseInt(prompt("Ingrese la cantidad de dinero que quiere solicitar"));

let resultado = interes(dineroSolicitado);
alert("Ok, entonces tendrás que devolver " + (resultado + dineroSolicitado));
let cuotas = (resultado + dineroSolicitado) / 12;

let proseguir = prompt("Para continuar ingrese SI , de lo contrario ingrese NO");

if(proseguir == "SI") {
     alert("Excelente, a continuacion le detallaré su pedido");
     alert("Solicitaste " + dineroSolicitado + " y tendras que devolver " + (resultado + dineroSolicitado) + " en 12 cuotas fijas de " + cuotas)
 } else if (proseguir == "NO") { alert("Ok, puedes volver cuando quieras");
 } else {alert("Verifica que hayas ingresado SI o NO")}