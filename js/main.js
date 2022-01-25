/*class autos {
    constructor (marca, modelo, año, precio) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.año = año;
        this.precio = parseFloat(precio);
        this.disponible = true;
    }

    precioTarjeta() {
        this.precio = this.precio * 1.2; 
    }
    alquilar() {
        this.disponible = false;
    }
}

//Defino nuevos tipos de auto
const auto1 = new autos ("Nissan" , "Versa" , 2015 , 8000);
const auto2 = new autos ("Chevrolet" , "Onix" , 2018 , 7500);
const auto3 = new autos ("Chevrolet" , "Corsa" , 2014 , 5500);
const auto4 = new autos ("Volkswagen" , "Fox" , 2020 , 7000);
const auto5 = new autos ("Fiat" , "Cronos" , 2021 , 8400);

alert(`Bienvenido a RENT-A-CAR`);
let choise = prompt(`Elija uno de nuestros autos disponibles:  \n 1- Nissan Versa 2015 \n 2- Chevrolet Onix 2018 \n 3- Chevrolet Corsa 2014 \n 4- Volkswagen Fox 2020 \n 5- Fiat Cronos 2021 `);

switch(choise) {
    case "1":
        let choiseCar1 = prompt(`Nissa Versa 2015. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
        if((choiseCar1 == 1) || (choiseCar1 == "efectivo")) {
            alert(`El precio en efectivo es ${auto1.precio}`)
            
        }
        else if ((choiseCar1 == 2) || (choiseCar1 == "tarjeta")) {
            auto1.precioTarjeta();
            alert(`El precio con tarjeta es ${auto1.precio}`)
        } 
        break;
    case "2":
        let choiseCar2 = prompt(`Chevrolet Onix 2018. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
        if((choiseCar2 == 1) || (choiseCar2 == "efectivo")) {
            alert(`El precio en efectivo es ${auto2.precio}`)
                
        }
        else if ((choiseCar2 == 2) || (choiseCar2 == "tarjeta")) {
            auto2.precioTarjeta();
            alert(`El precio con tarjeta es ${auto2.precio}`)
        } 
        break;  
    case "3":
        let choiseCar3 = prompt(`Chevrolet Corsa 2014. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
        if((choiseCar3 == 1) || (choiseCar3 == "efectivo")) {
            alert(`El precio en efectivo es ${auto3.precio}`)
                    
        }
        else if ((choiseCar3 == 2) || (choiseCar3 == "tarjeta")) {
            auto3.precioTarjeta();
            alert(`El precio con tarjeta es ${auto3.precio}`)
        } 
        break; 
    case "4":
        let choiseCar4 = prompt(`Volkswagen Fox 2020. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
        if((choiseCar4 == 1) || (choiseCar4 == "efectivo")) {
            alert(`El precio en efectivo es ${auto4.precio}`)
                    
        }
        else if ((choiseCar4 == 2) || (choiseCar4 == "tarjeta")) {
            auto4.precioTarjeta();
            alert(`El precio con tarjeta es ${auto4.precio}`)
            } 
        break;  
    case "5":
        let choiseCar5 = prompt(`Fiat Cronos 2021. \n Desea ver precio en : \n 1- EFECTIVO \n 2- TARJETA`)
        if((choiseCar5 == 1) || (choiseCar5 == "efectivo")) {
            alert(`El precio en efectivo es ${auto5.precio}`)
                        
        }
        else if ((choiseCar5 == 2) || (choiseCar5 == "tarjeta")) {
            auto5.precioTarjeta();
            alert(`El precio con tarjeta es ${auto5.precio}`)
        } 
        break;           
}

// Defino un Array vacio para luego pushear los productos  -- falta organizar en el prompt la posibilidad al usuario de filtrar  --
const arrAutos = [];
// Agrego objetos mediante push
arrAutos.push(auto1, auto2, auto3, auto4, auto5);
console.log(arrAutos);
// Iteracion para recorrer todos los objetos y extraer informacion detallada
console.log("En el array existen las siguientes Marcas:")
for (const marca of arrAutos) {
    console.log("Marca: " + marca.marca);
}
//  -- falta organizar en el prompt la posibilidad al usuario de filtrar  --
const menorPrecio = arrAutos.filter( precio => precio.precio <= 7000);
console.log("Con un presupuesto de 7000 podes alquilar estos vehiculos: ")
console.log(menorPrecio);



let contenedorHtml = document.createElement("div");
contenedorHtml.innerHTML = "<ul><li>auto1</li><li>auto2</li><li>auto4</li><li>auto4</li><li>auto5</li></ul>"
console.log(contenedorHtml);
document.write(contenedorHtml.innerText);

let parrafo = document.getElementsByTagName("p")
parrafo.innerHTML = "<br>Soy un parrafo de prueba<br>"
document.write(parrafo.innerHTML);

let nuevoParrafo = document.getElementsByClassName("p2");
nuevoParrafo.innerHTML = "Este es el nuevo <strong>parrafo</strong><br>";
document.write(nuevoParrafo.innerHTML);

let listaAutos = document.getElementsByTagName("li");
console.log(listaAutos)*/

// DESAFIO EVENTOS

const element = document.querySelector("#parrafo");
console.log(element);

element.innerText = "el parrafo de prueba fue modificado"


const boton1 = document.getElementById('boton1');

boton1.addEventListener('click' , () => { console.log('boton 1 clickeado') })

const boton2 = document.getElementById('boton2');

boton2.onclick = () => {alert('boton 2 clickeado')}

const functionBoton3 = () => {alert('boton 3 clickeado')}

// formulario de registro

const inputUsuario = document.getElementById("usuario");
const inputClave = document.querySelector("#clave");
const form = document.getElementById("form");

inputUsuario.addEventListener('change' , () => {
    const valor = inputUsuario.value

    if ( valor.length < 6 ) {
        inputUsuario.classList.add('invalido');
    } else {
        inputUsuario.classList.remove('invalido')
        inputUsuario.classList.add('valido');
    }
    
})

inputClave.addEventListener('change' , () => {
    const valor = inputClave.value

    if ( valor.length < 6 ) {
        inputClave.classList.add('invalido');
    } else {
        inputClave.classList.remove('invalido')
        inputClave.classList.add('valido');
    }
    
})

const usuarios = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = inputUsuario.value
    const clave = inputClave.value

    if (usuario.length < 6) {
        alert('El campo de Usuario debe tener al menos 6 caracteres');
        return
    }
    if (clave.length < 6) {
        alert('El campo de Clave debe tener al menos 6 caracteres');
        return
    }

    const usuarioCreado = {
        usuario: usuario,
        clave: clave
    }

    usuarios.push(usuarioCreado);
    alert(`El usuario ${usuarioCreado.usuario} se registro correctamente! Bienvenido a RENT A CAR`)
    console.log(`Usuario: ${usuarioCreado.usuario} // Clave: ${usuarioCreado.clave}`)
    form.reset();
})



