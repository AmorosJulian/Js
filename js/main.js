
alert("Hola! este es un desafio que solo mi tutora de Js puede ver..");
let nombre = prompt("Para corroborarlo, por favor ingresa tu nombre:");
let edad = parseInt(prompt("Tambien necesito verificar tu edad:"));

if (nombre.toLowerCase() == "karen" && edad >= 18) {
    alert("Bienvenida " + nombre + ", este es mi desafio 2 de Js !")
} else if(nombre.toLowerCase() !== "karen" ||  edad < 18 ) {
    alert("No estas autorizado para ingresar a mi desafio...")
} else {
    alert("No puedes ingresar, asegurate de colocar bien los datos solicitados...")
}
     
