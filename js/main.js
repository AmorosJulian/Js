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

//Defino nuevos tipos de auto
const auto1 = new autos ("Nissan" , "Versa" , 2015 , 8000);
const auto2 = new autos ("Chevrolet" , "Onix" , 2018 , 7500);
const auto3 = new autos ("Chevrolet" , "Corsa" , 2014 , 5500);
const auto4 = new autos ("Volkswagen" , "Fox" , 2020 , 7000);
const auto5 = new autos ("Fiat" , "Cronos" , 2021 , 8400);

//Muestro un auto, luego le aplico precio con tarjeta, lo alquilo y vuelvo a mostrar el estado del auto
// console.log(auto1);
// auto1.precioTarjeta();
// auto1.alquilar();
// console.log(auto1);
// console.log(auto4);
// auto4.precioTarjeta();
// auto4.alquilar();
// console.log(auto4);

// Defino un Array vacio para luego pushear los productos
const arrAutos = [];
// Agrego objetos mediante push
arrAutos.push(auto1, auto2, auto3, auto4, auto5, new autos ("Toyota".toUpperCase() , "Etios".toUpperCase() , 2019 , 8100));
console.log(arrAutos);
// Iteracion para recorrer todos los objetos y extraer informacion detallada
console.log("En el array existen las siguientes Marcas:")
for (const marca of arrAutos) {
    console.log("Marca: " + marca.marca);
}
const menorPrecio = arrAutos.filter( precio => precio.precio <= 7000);
console.log("Con un presupuesto de 7000 podes alquilar estos vehiculos: ")
console.log(menorPrecio);





