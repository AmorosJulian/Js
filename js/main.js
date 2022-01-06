/*function persona (nombre, param2, param3) {
     this.nombre = nombre;
     this.calle = param2;
     this.edad = param3;
     this.hablar = function() { console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.") }
 }

 const persona1 = new persona ("Julian", "Bustamante 2095", 26);
 const persona2 = new persona ("Tamara", "Vernet 1853", 24);

 persona1.hablar();
 persona2.hablar();

 console.log("nombre" in persona2);
 for (const calle in persona2) {
     console.log(persona2.calle)
 }

class producto {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

const producto1 = new producto ("arroz", 90);
const producto2 = new producto ("fideos", 120);

producto2.sumaIva();
producto2.vender();

console.log(producto1);*/


class autos {
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

const auto1 = new autos ("Nissan" , "Versa" , 2015 , 8000);
const auto2 = new autos ("Chevrolet" , "Onix" , 2018 , 7500);
const auto3 = new autos ("Chevrolet" , "Corsa" , 2014 , 5500);
const auto4 = new autos ("Volkswagen" , "Fox" , 2020 , 7000);
const auto5 = new autos ("Fiat" , "Cronos" , 2021 , 8400);

console.log(auto1);
auto1.precioTarjeta();
auto1.alquilar();
console.log(auto1);
console.log(auto4);
auto4.precioTarjeta();
auto4.alquilar();
console.log(auto4);

