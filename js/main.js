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

